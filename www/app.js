(function(){
"use strict";
/* ================= 数据 ================= */
const DECKS = window.WORD_DECKS;
const LESSONS = window.GRAMMAR;

/* ================= 进度存储 ================= */
const KEY = "eb_progress_v1";
let P = load();
function load(){ try{ const s=JSON.parse(localStorage.getItem(KEY)); if(s && s.v===1) return s; }catch(e){} return fresh(); }
function fresh(){ return {v:1, box:{}, last:{}, bestWQ:{}, bestGQ:{}, wrongW:[], wrongG:[], days:{}}; }
function save(){ try{ localStorage.setItem(KEY, JSON.stringify(P)); }catch(e){} }
function todayStr(){ const d=new Date(); return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate(); }
function touchDay(){ P.days[todayStr()]=1; save(); }

/* ================= 工具 ================= */
function $(s){ return document.querySelector(s); }
function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
function shuffle(a){ a=a.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); const t=a[i]; a[i]=a[j]; a[j]=t; } return a; }
function wid(deckId,i){ return deckId+":"+i; }
function getDeck(id){ return DECKS.find(function(d){return d.id===id;}); }
function getLesson(id){ return LESSONS.find(function(l){return l.id===id;}); }
function allWords(){ const r=[]; DECKS.forEach(function(d){ d.words.forEach(function(w,i){ r.push({deck:d.id, idx:i, w:w}); }); }); return r; }

/* ================= 间隔重复 ================= */
const INTERVALS=[1,3,7,14,30];
function boxOf(id){ return P.box[id]||0; }
function isDue(id){
  const b=boxOf(id);
  if(b>=5) return false;
  if(b===0) return true;
  const last=P.last[id]||0;
  const days=(Date.now()-last)/86400000;
  return days>=INTERVALS[Math.min(b,INTERVALS.length-1)];
}
function mastered(id){ return boxOf(id)>=2; }
function rateWord(id,level){
  const b=boxOf(id);
  if(level===2) P.box[id]=Math.min(b+1,5);
  else if(level===0) P.box[id]=0;
  P.last[id]=Date.now();
  touchDay(); save();
}
function deckProgress(deckId){
  const d=getDeck(deckId); let m=0;
  d.words.forEach(function(w,i){ if(mastered(wid(deckId,i))) m++; });
  return {m:m, total:d.words.length};
}
function dueWords(deckId){
  const d=getDeck(deckId); const r=[];
  d.words.forEach(function(w,i){ const id=wid(deckId,i); if(isDue(id)) r.push({deck:deckId, idx:i, w:w, id:id}); });
  return r;
}
function addWrongWord(id){ if(P.wrongW.indexOf(id)<0){ P.wrongW.unshift(id); P.wrongW=P.wrongW.slice(0,100); save(); } }
function addWrongG(lessonId,qi){
  const has=P.wrongG.some(function(x){return x.l===lessonId&&x.q===qi;});
  if(!has){ P.wrongG.unshift({l:lessonId,q:qi}); P.wrongG=P.wrongG.slice(0,100); save(); }
}

/* ================= 导航 ================= */
const view=$("#view");
let navStack=[];
function go(html,onMount){ navStack.push({html:html,onMount:onMount}); render(); }
function goReplace(html,onMount){ navStack[navStack.length-1]={html:html,onMount:onMount}; render(); }
function back(){ if(navStack.length>1){ navStack.pop(); render(); } }
function resetTo(html,onMount){ navStack=[{html:html,onMount:onMount}]; render(); }
function render(){ const top=navStack[navStack.length-1]; view.innerHTML=top.html; window.scrollTo(0,0); if(top.onMount) top.onMount(view); }

const tabBtns=document.querySelectorAll("#tabbar button");
tabBtns.forEach(function(b){
  b.addEventListener("click",function(){
    tabBtns.forEach(function(x){x.classList.remove("active");});
    b.classList.add("active");
    const t=b.dataset.tab;
    if(t==="home") showHome();
    else if(t==="words") showDecks();
    else if(t==="grammar") showGrammarList();
    else if(t==="me") showMe();
  });
});
function gotoTab(name){ const b=document.querySelector('[data-tab="'+name+'"]'); if(b) b.click(); }

/* ================= 首页 ================= */
function showHome(){
  const all=allWords();
  const now=new Date();
  const dayIdx=Math.floor(now.getTime()/86400000);
  const wotd=all[dayIdx%all.length];
  const w=wotd.w, d=getDeck(wotd.deck);
  let due=0, m=0;
  DECKS.forEach(function(dd){
    due+=dueWords(dd.id).length;
    dd.words.forEach(function(ww,i){ if(mastered(wid(dd.id,i))) m++; });
  });
  const days=Object.keys(P.days).length;
  resetTo(
    '<div class="hero"><h2>👋 你好，terry</h2><p>'+(now.getMonth()+1)+'月'+now.getDate()+'日 · '+(due>0?'今天还有 '+due+' 个单词待复习':'今日单词已学完，太棒了！')+'</p></div>'+
    '<div class="stat-grid">'+
      '<div class="stat"><b>'+m+'</b><span>已掌握单词</span></div>'+
      '<div class="stat"><b>'+days+'</b><span>学习天数</span></div>'+
      '<div class="stat"><b>'+due+'</b><span>待复习</span></div>'+
    '</div>'+
    '<div class="card word-day"><div class="sub" style="margin:0 0 6px">📅 每日一词 · '+esc(d.title)+'</div>'+
      '<div class="en">'+esc(w.w)+'</div><div class="phon">'+esc(w.phon)+' · '+esc(w.pos)+'</div>'+
      '<div class="cn">'+esc(w.cn)+'</div><div class="ex">'+esc(w.ex)+'</div><div class="ex-cn">'+esc(w.exCn)+'</div></div>'+
    '<div class="quick"><button class="q1" id="qk1">📖 背单词</button><button class="q2" id="qk2">📝 学语法</button></div>',
  function(){
    $("#qk1").onclick=function(){ gotoTab("words"); };
    $("#qk2").onclick=function(){ gotoTab("grammar"); };
  });
}

/* ================= 单词：词书列表 ================= */
function showDecks(){
  const html=DECKS.map(function(d){
    const p=deckProgress(d.id), due=dueWords(d.id).length;
    const pct=Math.round(p.m/p.total*100);
    const best=P.bestWQ[d.id];
    return '<div class="item" data-id="'+d.id+'"><div class="icon">'+d.icon+'</div>'+
      '<div class="grow"><div class="t">'+esc(d.title)+'</div>'+
      '<div class="d">'+p.m+'/'+p.total+' 已掌握'+(due>0?' · '+due+' 待复习':'')+(best!=null?' · 测验最佳'+best+'分':'')+'</div>'+
      '<div class="progress"><div style="width:'+pct+'%"></div></div></div>'+
      '<span class="arrow">›</span></div>';
  }).join("");
  resetTo('<div class="page-title">单词</div><div class="sub">10 个主题词书 · 共 200 词 · 闪卡 + 测验</div>'+html,
  function(root){
    root.querySelectorAll(".item").forEach(function(el){ el.onclick=function(){ showDeckDetail(el.dataset.id); }; });
  });
}

function showDeckDetail(deckId){
  const d=getDeck(deckId);
  const p=deckProgress(deckId);
  const due=dueWords(deckId).length;
  const best=P.bestWQ[deckId];
  const pct=Math.round(p.m/p.total*100);
  go('<button class="back" id="bk">‹ 返回</button>'+
    '<div class="page-title">'+d.icon+' '+esc(d.title)+'</div>'+
    '<div class="sub">共 '+p.total+' 词 · 已掌握 '+p.m+' · 待复习 '+due+(best!=null?' · 测验最佳 '+best+'分':'')+'</div>'+
    '<div class="card"><div class="row"><div class="grow"><b>掌握进度</b></div><span>'+pct+'%</span></div>'+
    '<div class="progress"><div style="width:'+pct+'%"></div></div></div>'+
    '<button class="btn btn-primary" id="st" style="margin-bottom:10px">📖 开始学习'+(due>0?'（'+due+' 个待复习）':'')+'</button>'+
    '<button class="btn btn-ghost" id="qz">📝 词汇测验</button>',
  function(){
    $("#bk").onclick=back;
    $("#st").onclick=function(){ startStudy(deckId); };
    $("#qz").onclick=function(){ startWordQuiz(deckId); };
  });
}

/* ================= 单词：闪卡学习 ================= */
function startStudy(deckId){
  const d=getDeck(deckId);
  let list=dueWords(deckId);
  if(list.length===0){
    go('<button class="back" id="bk">‹ 返回</button>'+
      '<div class="card done-box"><div class="big">🎉</div>'+
      '<h3>今日单词已学完！</h3><p class="sub">要不要再整体复习一遍？</p></div>'+
      '<button class="btn btn-primary" id="ra">复习全部 '+d.words.length+' 个单词</button>',
    function(){
      $("#bk").onclick=back;
      $("#ra").onclick=function(){
        list=shuffle(d.words.map(function(w,i){ return {deck:deckId, idx:i, w:w, id:wid(deckId,i)}; }));
        runStudy();
      };
    });
    return;
  }
  list=shuffle(list);
  runStudy();

  function runStudy(){
    let i=0, c0=0, c1=0, c2=0;
    function renderCard(){
      const item=list[i], w=item.w;
      goReplace('<button class="back" id="bk">‹ 退出学习</button>'+
        '<div class="page-title">'+d.icon+' '+esc(d.title)+'</div>'+
        '<div class="flash-wrap">'+
          '<div class="flash-progress">第 '+(i+1)+' / '+list.length+' 个</div>'+
          '<div class="flashcard" id="fc"><div class="flash-inner">'+
            '<div class="flash-face flash-front"><div class="w">'+esc(w.w)+'</div><div class="hint">点击卡片查看释义</div></div>'+
            '<div class="flash-face flash-back">'+
              '<div class="w">'+esc(w.w)+'</div><div class="phon">'+esc(w.phon)+' · '+esc(w.pos)+'</div>'+
              '<div class="cn">'+esc(w.cn)+'</div>'+
              '<div class="ex">'+esc(w.ex)+'</div><div class="ex-cn">'+esc(w.exCn)+'</div>'+
            '</div>'+
          '</div></div>'+
          '<div class="rate-row">'+
            '<button class="rate-bad" id="r0">不认识</button>'+
            '<button class="rate-mid" id="r1">模糊</button>'+
            '<button class="rate-ok" id="r2">认识</button>'+
          '</div>'+
        '</div>',
      function(){
        $("#bk").onclick=back;
        const fc=$("#fc");
        fc.onclick=function(){ fc.classList.toggle("flipped"); };
        const rate=function(lv){
          rateWord(item.id,lv);
          if(lv===0)c0++; else if(lv===1)c1++; else c2++;
          i++;
          if(i<list.length) renderCard(); else showDone();
        };
        $("#r0").onclick=function(){rate(0);};
        $("#r1").onclick=function(){rate(1);};
        $("#r2").onclick=function(){rate(2);};
      });
    }
    function showDone(){
      goReplace('<button class="back" id="bk">‹ 返回</button>'+
        '<div class="card done-box"><div class="big">🎓</div>'+
        '<h3>本轮学习完成！</h3>'+
        '<p class="sub">认识 '+c2+' · 模糊 '+c1+' · 不认识 '+c0+'</p>'+
        '<p class="sub">不认识的单词明天会再出现，坚持就是胜利！</p></div>'+
        '<button class="btn btn-primary" id="ok">完成</button>',
      function(){ $("#bk").onclick=back; $("#ok").onclick=back; });
    }
    renderCard();
  }
}

/* ================= 通用测验引擎 ================= */
function runQuiz(cfg){
  let i=0, correct=0;
  const total=cfg.questions.length;
  function renderQ(){
    const Q=cfg.questions[i];
    const opts=Q.options.map(function(o,oi){ return '<button class="opt" data-i="'+oi+'">'+esc(o)+'</button>'; }).join("");
    goReplace('<button class="back" id="bk">‹ 退出测验</button>'+
      '<div class="page-title">'+esc(cfg.title)+'</div>'+
      '<div class="quiz-sub">第 '+(i+1)+' / '+total+' 题'+(cfg.sub?' · '+esc(cfg.sub):'')+'</div>'+
      '<div class="card"><div class="quiz-q">'+esc(Q.q)+'</div>'+(Q.hint?'<div class="quiz-sub" style="margin:6px 0 0">'+esc(Q.hint)+'</div>':'')+'</div>'+
      '<div id="opts">'+opts+'</div><div id="exp"></div>'+
      '<button class="btn btn-primary" id="next" style="display:none;margin-top:6px">'+(i+1<total?'下一题':'查看结果')+'</button>',
    function(root){
      $("#bk").onclick=back;
      let answered=false;
      root.querySelectorAll(".opt").forEach(function(btn){
        btn.onclick=function(){
          if(answered) return; answered=true;
          const pick=+btn.dataset.i;
          root.querySelectorAll(".opt").forEach(function(b){
            b.disabled=true;
            if(+b.dataset.i===Q.answer) b.classList.add("correct");
          });
          if(pick===Q.answer){ correct++; }
          else { btn.classList.add("wrong"); if(cfg.onWrong) cfg.onWrong(i); }
          if(Q.explain) $("#exp").innerHTML='<div class="explain">💡 '+esc(Q.explain)+'</div>';
          $("#next").style.display="block";
        };
      });
      $("#next").onclick=function(){ i++; if(i<total) renderQ(); else showResult(); };
    });
  }
  function showResult(){
    const pct=Math.round(correct/total*100);
    if(cfg.onDone) cfg.onDone(correct,total,pct);
    const msg=pct===100?'🎉 满分！太棒了！':pct>=80?'👍 很不错，继续保持！':pct>=60?'💪 及格了，再接再厉！':'📚 多复习几遍再来挑战！';
    goReplace('<button class="back" id="bk">‹ 返回</button>'+
      '<div class="card quiz-score"><div class="big">'+pct+'分</div>'+
      '<p style="margin:10px 0">答对 '+correct+' / '+total+' 题</p><p>'+msg+'</p></div>'+
      '<button class="btn btn-primary" id="again" style="margin-bottom:10px">再来一次</button>'+
      '<button class="btn btn-ghost" id="done">返回</button>',
    function(){
      $("#bk").onclick=back; $("#done").onclick=back;
      $("#again").onclick=function(){ i=0; correct=0; renderQ(); };
    });
  }
  renderQ();
}

/* ================= 单词：词汇测验 ================= */
function startWordQuiz(deckId){
  const d=getDeck(deckId);
  const pool=d.words.map(function(w,i){ return {w:w, idx:i}; });
  const qs=shuffle(pool).slice(0,Math.min(10,pool.length)).map(function(item){
    const w=item.w;
    const others=shuffle(pool.filter(function(p){return p.idx!==item.idx;})).slice(0,3).map(function(p){return p.w;});
    const en2cn=Math.random()<0.5;
    let q,hint,options,answer;
    if(en2cn){
      q=w.w; hint=w.phon+' · 请选择正确的中文释义';
      options=shuffle([w].concat(others)).map(function(x){return x.cn;});
      answer=options.indexOf(w.cn);
    }else{
      q=w.cn; hint='请选择正确的英文单词';
      options=shuffle([w].concat(others)).map(function(x){return x.w;});
      answer=options.indexOf(w.w);
    }
    return {q:q, hint:hint, options:options, answer:answer,
      explain:'“'+w.w+'”'+(w.pos?'（'+w.pos+'）':'')+'：'+w.cn+'。例：'+w.ex,
      wordId:wid(deckId,item.idx)};
  });
  runQuiz({
    title:d.icon+' '+d.title+' · 测验', sub:'词汇',
    questions:qs,
    onWrong:function(qi){ addWrongWord(qs[qi].wordId); },
    onDone:function(c,t,pct){
      touchDay();
      if(P.bestWQ[deckId]==null||pct>P.bestWQ[deckId]) P.bestWQ[deckId]=pct;
      save();
    }
  });
}

/* ================= 语法：课程列表 ================= */
function showGrammarList(){
  const html=LESSONS.map(function(l){
    const best=P.bestGQ[l.id];
    return '<div class="item" data-id="'+l.id+'"><div class="icon">'+l.icon+'</div>'+
      '<div class="grow"><div class="t">'+esc(l.title)+'</div><div class="d">'+l.quiz.length+' 道练习题</div></div>'+
      (best!=null?'<span class="score-badge">'+best+'分</span>':'<span class="arrow">›</span>')+'</div>';
  }).join("");
  resetTo('<div class="page-title">语法课程</div><div class="sub">每课包含中文讲解 + 随堂测验</div>'+html,
  function(root){
    root.querySelectorAll(".item").forEach(function(el){ el.onclick=function(){ showLesson(el.dataset.id); }; });
  });
}

function showLesson(lessonId){
  const l=getLesson(lessonId);
  const best=P.bestGQ[lessonId];
  const secs=l.sections.map(function(s){ return '<h3>'+esc(s.h)+'</h3>'+s.body; }).join("");
  go('<button class="back" id="bk">‹ 返回</button>'+
    '<div class="page-title">'+l.icon+' '+esc(l.title)+'</div>'+
    '<div class="sub">'+esc(l.intro)+(best!=null?' · 最佳 '+best+'分':'')+'</div>'+
    '<div class="card lesson-body">'+secs+'</div>'+
    '<button class="btn btn-primary" id="qz">📝 开始随堂测验（'+l.quiz.length+' 题）</button>',
  function(){
    $("#bk").onclick=back;
    $("#qz").onclick=function(){ startGrammarQuiz(lessonId); };
  });
}

function startGrammarQuiz(lessonId){
  const l=getLesson(lessonId);
  const qs=l.quiz.map(function(qq){
    return {q:qq.q, hint:'请选择正确的答案', options:qq.options.slice(), answer:qq.answer, explain:qq.explain};
  });
  runQuiz({
    title:l.icon+' '+l.title+' · 测验', sub:'语法',
    questions:qs,
    onWrong:function(qi){ addWrongG(lessonId,qi); },
    onDone:function(c,t,pct){
      touchDay();
      if(P.bestGQ[lessonId]==null||pct>P.bestGQ[lessonId]) P.bestGQ[lessonId]=pct;
      save();
    }
  });
}

/* ================= 我的 ================= */
function showMe(){
  let m=0,total=0;
  DECKS.forEach(function(d){ d.words.forEach(function(w,i){ total++; if(mastered(wid(d.id,i))) m++; }); });
  const days=Object.keys(P.days).length;
  const gDone=Object.keys(P.bestGQ).length;
  const wrongN=P.wrongW.length+P.wrongG.length;
  resetTo('<div class="page-title">我的</div>'+
    '<div class="stat-grid">'+
      '<div class="stat"><b>'+m+'</b><span>已掌握单词</span></div>'+
      '<div class="stat"><b>'+days+'</b><span>学习天数</span></div>'+
      '<div class="stat"><b>'+gDone+'</b><span>完成语法课</span></div>'+
    '</div>'+
    '<div class="card"><div class="row" id="mist" style="cursor:pointer;padding:4px 0">'+
      '<div class="grow"><b>📓 错题本</b><div class="d">'+wrongN+' 道错题待复习</div></div><span class="arrow">›</span></div></div>'+
    '<div class="card"><b>关于英语学伴</b>'+
      '<p class="sub" style="margin:6px 0 0">200 核心单词 · 8 个语法专题 · 闪卡记忆 + 随堂测验<br>学习进度保存在本机，离线可用，无需账号。</p></div>'+
    '<button class="btn btn-danger" id="reset">清空学习进度</button>',
  function(){
    $("#mist").onclick=showMistakes;
    $("#reset").onclick=function(){
      if(confirm("确定要清空所有学习进度吗？此操作不可恢复。")){ P=fresh(); save(); showMe(); }
    };
  });
}

/* ================= 错题本 ================= */
function showMistakes(){
  const wHtml=P.wrongW.map(function(id){
    const parts=id.split(":"), d=getDeck(parts[0]);
    if(!d) return "";
    const w=d.words[+parts[1]];
    if(!w) return "";
    return '<div class="mistake"><div class="q">'+esc(w.w)+' <span class="tag">'+esc(d.title)+'</span></div>'+
      '<div class="a">✅ '+esc(w.cn)+'</div><div class="e">'+esc(w.ex)+'<br>'+esc(w.exCn)+'</div></div>';
  }).join("");
  const gHtml=P.wrongG.map(function(x){
    const l=getLesson(x.l);
    if(!l) return "";
    const qq=l.quiz[x.q];
    if(!qq) return "";
    return '<div class="mistake"><div class="q">'+esc(qq.q)+' <span class="tag">'+esc(l.title)+'</span></div>'+
      '<div class="a">✅ '+esc(qq.options[qq.answer])+'</div><div class="e">💡 '+esc(qq.explain)+'</div></div>';
  }).join("");
  const n=P.wrongW.length+P.wrongG.length;
  go('<button class="back" id="bk">‹ 返回</button>'+
    '<div class="page-title">错题本</div>'+
    (n===0
      ? '<div class="empty">🎉 错题本是空的，继续保持！</div>'
      : '<div class="sub">单词错题 '+P.wrongW.length+' · 语法错题 '+P.wrongG.length+'</div>'+wHtml+gHtml+
        '<button class="btn btn-ghost" id="clear" style="margin-top:6px">清空错题本</button>'),
  function(){
    $("#bk").onclick=back;
    const c=$("#clear");
    if(c) c.onclick=function(){ P.wrongW=[]; P.wrongG=[]; save(); showMistakes(); };
  });
}

/* ================= 启动 ================= */
showHome();
})();
