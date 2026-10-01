window.GRAMMAR = [
{id:"present-simple", title:"一般现在时", icon:"🕐",
 intro:"表示经常性、习惯性的动作或状态，以及客观真理、科学事实。",
 sections:[
  {h:"基本结构", body:"<p><span class='f'>主语 + 动词原形</span>（I / you / we / they / 复数名词）</p><p><span class='f'>主语（第三人称单数） + 动词-s / -es</span></p><div class='ex'>I <b>like</b> apples. / She <b>likes</b> apples.</div>"},
  {h:"第三人称单数变化规则", body:"<ul><li>一般情况直接加 <span class='f'>-s</span>：work → works</li><li>以 <span class='f'>o / ch / sh / s / x</span> 结尾加 <span class='f'>-es</span>：go → goes，watch → watches</li><li>以“辅音字母 + y”结尾，变 y 为 i 加 <span class='f'>-es</span>：study → studies</li></ul>"},
  {h:"主要用法", body:"<ul><li><b>习惯、经常性的动作</b>：常与 always、usually、often、every day 连用。<div class='ex'>He <b>usually gets up</b> at six.</div></li><li><b>客观真理、科学事实</b>：<div class='ex'>The sun <b>rises</b> in the east.</div></li><li><b>固定安排、时刻表</b>：<div class='ex'>The train <b>leaves</b> at 8:00.</div></li></ul>"},
  {h:"⚠️ 易错点", body:"<ul><li>用 <span class='f'>do / does</span> 提问或否定时，动词要还原：<span class='f'>Does</span> he <b>like</b> tea?（不说 likes）</li><li><span class='f'>don't / doesn't</span> 后面永远跟动词原形。</li></ul>"}
 ],
 quiz:[
  {q:"She ___ to school by bus every day.", options:["go","goes","going","went"], answer:1, explain:"主语 she 是第三人称单数，go 以 o 结尾加 -es → goes。"},
  {q:"They ___ football on Sundays.", options:["plays","play","playing","played"], answer:1, explain:"主语 they 用动词原形 play。"},
  {q:"___ he like coffee?", options:["Do","Does","Is","Has"], answer:1, explain:"第三人称单数疑问句用 Does 开头，like 用原形。"},
  {q:"My father ___ not smoke.", options:["do","does","is","are"], answer:1, explain:"第三人称单数否定用 does not，smoke 用原形。"},
  {q:"The sun ___ in the east.", options:["rise","rises","rose","rising"], answer:1, explain:"客观真理用一般现在时，主语 the sun 第三人称单数 → rises。"},
  {q:"Water ___ at 100℃.", options:["boil","boils","boiled","boiling"], answer:1, explain:"科学事实用一般现在时，water 作主语是第三人称单数 → boils。"}
 ]},
{id:"past-simple", title:"一般过去时", icon:"🕰️",
 intro:"表示过去某个时间发生过的动作，或过去存在的状态。",
 sections:[
  {h:"基本结构", body:"<p><span class='f'>主语 + 动词过去式</span></p><p>be 动词过去式：<span class='f'>was / were</span></p><div class='ex'>I <b>watched</b> TV last night. / She <b>was</b> tired.</div>"},
  {h:"动词过去式变化", body:"<ul><li><b>规则变化</b>：一般加 -ed（play → played）；以 e 结尾加 -d（live → lived）；辅音+y 变 i 加 -ed（study → studied）；重读闭音节双写加 -ed（stop → stopped）。</li><li><b>不规则变化</b>（需记忆）：go → went，see → saw，eat → ate，have → had，do → did，write → wrote，take → took。</li></ul>"},
  {h:"时间标志词", body:"<p>yesterday（昨天）、last night / week / year（上…）、…ago（…以前）、in 2010（在2010年）</p><div class='ex'>He <b>came</b> here <b>two days ago</b>.</div>"},
  {h:"⚠️ 易错点", body:"<ul><li>用了 <span class='f'>did</span> 提问或否定，动词必须用原形：<span class='f'>Did</span> you <b>go</b>? / I <span class='f'>didn't go</span>.</li><li>was / were 本身已是过去式，前面不再加 did。</li></ul>"}
 ],
 quiz:[
  {q:"I ___ a movie last night.", options:["watch","watched","watches","watching"], answer:1, explain:"last night 是过去时间标志，用过去式 watched。"},
  {q:"She ___ to Beijing in 2020.", options:["go","goes","went","gone"], answer:2, explain:"in 2020 表过去，go 的过去式是 went。"},
  {q:"___ you see him yesterday?", options:["Do","Does","Did","Are"], answer:2, explain:"过去时的疑问句用 Did 开头，see 用原形。"},
  {q:"They didn't ___ TV last night.", options:["watch","watched","watches","watching"], answer:0, explain:"didn't 后面跟动词原形 watch。"},
  {q:"He ___ very tired yesterday.", options:["is","are","was","were"], answer:2, explain:"he 的过去式 be 动词用 was。"},
  {q:"We ___ lunch at noon yesterday.", options:["have","had","has","having"], answer:1, explain:"yesterday 表过去，have 的过去式是 had。"}
 ]},
{id:"present-continuous", title:"现在进行时", icon:"▶️",
 intro:"表示此时此刻正在进行的动作，或现阶段一直在持续的动作。",
 sections:[
  {h:"基本结构", body:"<p><span class='f'>am / is / are + 动词-ing（现在分词）</span></p><div class='ex'>I <b>am reading</b>. / She <b>is sleeping</b>. / They <b>are playing</b>.</div>"},
  {h:"现在分词构成规则", body:"<ul><li>一般直接加 <span class='f'>-ing</span>：play → playing</li><li>以不发音的 e 结尾，去 e 加 -ing：write → writing</li><li>重读闭音节双写加 -ing：run → running，swim → swimming</li></ul>"},
  {h:"主要用法", body:"<ul><li><b>正在进行</b>：常与 now、at the moment、Look!、Listen! 连用。<div class='ex'>Look! The baby <b>is crying</b>.</div></li><li><b>现阶段持续的动作</b>：<div class='ex'>We <b>are preparing</b> for the exam these days.</div></li><li><b>表将来的安排</b>：<div class='ex'>I <b>am leaving</b> tomorrow.（已安排好）</div></li></ul>"},
  {h:"⚠️ 易错点", body:"<ul><li>be 动词必须和主语搭配：I → am，he/she/it → is，you/we/they → are。</li><li>不要漏掉 be：不说 She sleeping，要说 She <b>is</b> sleeping。</li></ul>"}
 ],
 quiz:[
  {q:"Look! The baby ___.", options:["cry","cries","is crying","cried"], answer:2, explain:"Look! 提示正在发生，用现在进行时 is crying。"},
  {q:"They ___ football now.", options:["are playing","plays","played","play"], answer:0, explain:"now 提示现在进行时，主语 they 配 are。"},
  {q:"I ___ a book at the moment.", options:["read","am reading","reads","reading"], answer:1, explain:"at the moment 提示正在进行，I 配 am。"},
  {q:"She ___ TV now.", options:["is watch","is watching","watches","watch"], answer:1, explain:"is 后面要跟动词-ing 形式 watching。"},
  {q:"We ___ for the exam these days.", options:["are preparing","prepare","prepared","prepares"], answer:0, explain:"these days 表现阶段持续的动作，用现在进行时。"},
  {q:"___ you ___ now?", options:["Are…listening","Do…listen","Is…listening","Does…listen"], answer:0, explain:"现在进行时疑问句：Are + 主语 + doing。"}
 ]},
{id:"present-perfect", title:"现在完成时", icon:"✅",
 intro:"表示过去发生、一直持续到现在，或对现在造成影响的动作。核心感觉：“已经做完 / 到目前为止”。",
 sections:[
  {h:"基本结构", body:"<p><span class='f'>have / has + 过去分词（done）</span></p><div class='ex'>I <b>have finished</b> my homework. / She <b>has been</b> to Paris.</div>"},
  {h:"过去分词变化", body:"<ul><li><b>规则</b>：和过去式同形，加 -ed（finished，visited）。</li><li><b>不规则</b>（需记忆）：go → gone，see → seen，eat → eaten，write → written，do → done，be → been。</li></ul>"},
  {h:"常用标志词", body:"<ul><li><span class='f'>already</span>（已经）、<span class='f'>just</span>（刚刚）、<span class='f'>yet</span>（用于否定/疑问：还没有）、<span class='f'>ever / never</span>（曾经/从未）</li><li><span class='f'>since + 过去时间点</span>（自从2015年）、<span class='f'>for + 一段时间</span>（长达五年）<div class='ex'>They have lived here <b>since 2015</b>. / He has worked here <b>for five years</b>.</div></li></ul>"},
  {h:"⚠️ 易错点", body:"<ul><li>第三人称单数用 <span class='f'>has</span>，其他用 <span class='f'>have</span>。</li><li>since 接“时间点”，for 接“时间段”，不要混。</li></ul>"}
 ],
 quiz:[
  {q:"I have ___ my homework.", options:["finish","finished","finishing","finishes"], answer:1, explain:"have 后面跟过去分词 finished。"},
  {q:"She has ___ to Paris twice.", options:["be","been","being","is"], answer:1, explain:"has 后面跟过去分词，be 的过去分词是 been。"},
  {q:"___ you ever ___ sushi?", options:["Have…eaten","Has…eaten","Do…eat","Did…eat"], answer:0, explain:"ever 常与现在完成时连用：Have you ever eaten…?"},
  {q:"They have lived here ___ 2015.", options:["for","since","from","at"], answer:1, explain:"since 接过去的时间点 2015。"},
  {q:"He has worked here ___ five years.", options:["since","for","from","in"], answer:1, explain:"for 接一段时间 five years。"},
  {q:"I haven't seen him ___.", options:["already","just","yet","ever"], answer:2, explain:"yet 常用于否定句尾，表示“还（没）”。"}
 ]},
{id:"future", title:"一般将来时", icon:"🔮",
 intro:"表示将来某个时间要发生的动作或存在的状态。",
 sections:[
  {h:"基本结构", body:"<p><span class='f'>will + 动词原形</span>（最常用）</p><p><span class='f'>be going to + 动词原形</span>（表计划、打算）</p><div class='ex'>I <b>will help</b> you. / She <b>is going to visit</b> us next week.</div>"},
  {h:"will 与 be going to 的区别", body:"<ul><li><span class='f'>will</span>：说话时临时作出的决定、意愿，或客观的将来事实。<div class='ex'>— I forgot my wallet. — I <b>will</b> lend you some money.</div></li><li><span class='f'>be going to</span>：事先计划好的打算，或根据迹象作出的推测。<div class='ex'>Look at the clouds! It <b>is going to</b> rain.</div></li></ul>"},
  {h:"时间标志词", body:"<p>tomorrow（明天）、next week / month / year（下…）、soon（不久）、in the future（将来）</p>"},
  {h:"⚠️ 易错点", body:"<ul><li>will 后面永远跟动词原形，不说 will goes。</li><li>be going to 中的 be 要随主语变化：I <b>am</b> going to，she <b>is</b> going to，they <b>are</b> going to。</li></ul>"}
 ],
 quiz:[
  {q:"I ___ help you.", options:["will","am","was","have"], answer:0, explain:"表将来，用 will + 动词原形。"},
  {q:"Look at the clouds! It ___ rain.", options:["will","is going to","would","shall"], answer:1, explain:"根据乌云迹象推测，用 be going to。"},
  {q:"She ___ visit us next week.", options:["is going to","goes","went","going"], answer:0, explain:"事先计划好的安排，用 be going to（she 配 is）。"},
  {q:"— I forgot my wallet. — I ___ lend you some money.", options:["will","would","am going","shall"], answer:0, explain:"说话时临时作出的决定，用 will。"},
  {q:"They ___ have a meeting tomorrow.", options:["will","would","had","having"], answer:0, explain:"tomorrow 表将来，用 will + 原形。"},
  {q:"We ___ going to be late.", options:["is","am","are","be"], answer:2, explain:"be going to 中 be 随主语 we 用 are。"}
 ]},
{id:"passive", title:"被动语态", icon:"🔄",
 intro:"当动作的执行者不重要或不知道时，用被动语态强调“被…”的对象。",
 sections:[
  {h:"基本结构", body:"<p><span class='f'>be + 过去分词（done）</span></p><div class='ex'>English <b>is spoken</b> in many countries.</div>"},
  {h:"各种时态的被动", body:"<ul><li>一般现在时：<span class='f'>is / are + done</span> → The room <b>is cleaned</b> every day.</li><li>一般过去时：<span class='f'>was / were + done</span> → The bridge <b>was built</b> in 2000.</li><li>一般将来时：<span class='f'>will be + done</span> → The work <b>will be finished</b> tomorrow.</li><li>现在完成时：<span class='f'>has / have been + done</span> → It <b>has been translated</b> into many languages.</li></ul>"},
  {h:"by 短语", body:"<p>如需说出动作执行者，用 <span class='f'>by</span> 引出：</p><div class='ex'>The book was written <b>by</b> Lu Xun.</div>"},
  {h:"⚠️ 易错点", body:"<ul><li>不及物动词（如 go、sleep、arrive）没有被动语态。</li><li>be 动词的时态要随语境变化，不能永远用 is。</li></ul>"}
 ],
 quiz:[
  {q:"English ___ in many countries.", options:["speaks","is spoken","spoke","speaking"], answer:1, explain:"English 是被说的对象，用被动 is spoken。"},
  {q:"The bridge ___ in 2000.", options:["built","was built","is built","builds"], answer:1, explain:"in 2000 表过去，被动用 was built。"},
  {q:"The work ___ by tomorrow.", options:["will finish","will be finished","finishes","finished"], answer:1, explain:"by tomorrow 表将来被动：will be finished。"},
  {q:"The room ___ every day.", options:["cleans","is cleaned","cleaned","cleaning"], answer:1, explain:"every day 表经常性被动：is cleaned。"},
  {q:"He ___ to the party yesterday.", options:["invited","was invited","is invited","invites"], answer:1, explain:"yesterday 表过去，被邀请用 was invited。"},
  {q:"The book ___ into many languages.", options:["has translated","has been translated","translates","is translating"], answer:1, explain:"现在完成时的被动：has been translated。"}
 ]},
{id:"relative", title:"定语从句", icon:"🔗",
 intro:"用一个从句来修饰名词，相当于给名词加“定语”。先行词 + 关系词 + 从句。",
 sections:[
  {h:"关系代词", body:"<ul><li><span class='f'>who / whom</span>：指人（who 作主语，whom 作宾语）<div class='ex'>The man <b>who</b> is talking is my uncle.</div></li><li><span class='f'>which</span>：指物<div class='ex'>I like the book <b>which</b> you bought.</div></li><li><span class='f'>that</span>：可指人也可指物（口语常用）</li><li><span class='f'>whose</span>：表示“……的”（whose + 名词）<div class='ex'>She is the girl <b>whose</b> bike was stolen.</div></li><li><span class='f'>where</span>（地点）、<span class='f'>when</span>（时间）、<span class='f'>why</span>（原因）：作关系副词<div class='ex'>This is the house <b>where</b> I was born.</div></li></ul>"},
  {h:"that 与 which", body:"<p>在限定性定语从句中，that 和 which 指物时常可互换；但有逗号的非限定性从句（补充说明）只能用 which，不能用 that。</p><div class='ex'>My car, <b>which</b> is red, is fast.（不能用 that）</div>"},
  {h:"⚠️ 易错点", body:"<ul><li>whose 后面直接跟名词，不加 the：<span class='f'>whose bag</span>（不说 whose the bag）。</li><li>关系词在从句中已有成分，不要重复主语：The man who <b>he</b> is talking… ❌</li></ul>"}
 ],
 quiz:[
  {q:"The man ___ is talking to my father is my uncle.", options:["who","which","whom","whose"], answer:0, explain:"先行词 the man 指人，且在从句中作主语，用 who。"},
  {q:"I like the book ___ you bought yesterday.", options:["who","which","whom","whose"], answer:1, explain:"先行词 the book 指物，用 which（that 也可，但选项中只有 which）。"},
  {q:"She is the girl ___ bike was stolen.", options:["who","which","whose","whom"], answer:2, explain:"表示“她的自行车”，用 whose + 名词。"},
  {q:"This is the house ___ I was born.", options:["where","which","who","that"], answer:0, explain:"先行词是地点 house，在从句中作状语，用 where。"},
  {q:"The reason ___ he was late is unknown.", options:["why","which","who","that"], answer:0, explain:"先行词 the reason 表原因，用 why。"},
  {q:"Do you know the boy ___ bag is on the desk?", options:["who's","whose","which","that"], answer:1, explain:"表示“他的书包”，用 whose。注意 who's = who is，不要混淆。"}
 ]},
{id:"modal", title:"情态动词", icon:"💡",
 intro:"can、must、should 等词，表达能力、许可、必须、建议等含义，后面永远跟动词原形。",
 sections:[
  {h:"核心规则", body:"<p>情态动词后 <b>永远跟动词原形</b>，没有人称和数的变化，没有 -s、-ed、-ing。</p><div class='ex'>She <b>can swim</b>.（不说 cans swims）</div>"},
  {h:"常见情态动词", body:"<ul><li><span class='f'>can / could</span>：能力、许可（could 是过去式，也表委婉）<div class='ex'>She <b>could</b> swim when she was five.</div></li><li><span class='f'>may / might</span>：许可、可能（might 可能性更小）<div class='ex'><b>May</b> I use your phone?</div></li><li><span class='f'>must</span>：必须；也表有把握的推测<div class='ex'>He <b>must</b> be at home; the lights are on.</div></li><li><span class='f'>should</span>：应该、建议<div class='ex'>You <b>should</b> have a rest.</div></li><li><span class='f'>have to</span>：不得不（客观需要）</li><li><span class='f'>need</span>：需要</li></ul>"},
  {h:"⚠️ 易错点", body:"<ul><li><span class='f'>mustn't</span> = 禁止（don't do it）；<span class='f'>don't have to</span> = 不必（可做可不做）。两者意思完全不同！</li><li>疑问句直接把情态动词提前：<span class='f'>Can</span> you help me?</li></ul>"}
 ],
 quiz:[
  {q:"You ___ smoke here. It's not allowed.", options:["must","mustn't","don't have to","need"], answer:1, explain:"mustn't 表禁止：此处不允许吸烟。"},
  {q:"She ___ swim when she was five.", options:["can","could","may","must"], answer:1, explain:"过去的能力用 could。"},
  {q:"You ___ wear a uniform. It's optional.", options:["must","mustn't","don't have to","shouldn't"], answer:2, explain:"optional 说明不必，用 don't have to。"},
  {q:"___ I use your phone?", options:["Must","Should","May","Need"], answer:2, explain:"请求许可用 May I…? 最礼貌。"},
  {q:"You look tired. You ___ have a rest.", options:["should","mustn't","can't","may not"], answer:0, explain:"给建议用 should。"},
  {q:"He ___ be at home; the lights are on.", options:["must","can't","mustn't","should"], answer:0, explain:"根据灯亮着推测“一定在家”，must 表有把握的推测。"}
 ]}
];
