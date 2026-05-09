const d=document,ls=localStorage,cg=id=>d.getElementById(id);const dbFiles = [

"db.json",

"text.json",

"cod.json",

"true.json",

"l.json",

"a.json",

"b.json",

"c.json",

"d.json",

"e.json",

"f.json",

"g.json",

"h.json",

"i.json",

"j.json",

"k.json",

"m.json",

"n.json",

"o.json",

"p.json",

"q.json",

"r.json",

"s.json",

"t.json",

"u.json",

"v.json",

"w.json",

"x.json",

"y.json",

"z.json"

];

let oDB={intents:[]};Promise.all(

    dbFiles.map(f =>

        fetch(f)

        .then(r => r.json())

        .catch(() => ({ intents: [] }))

    )

).then(allDB => {


    oDB = {

        intents: [],

        resources: []

    };


    allDB.forEach(db => {


        if (db.intents) {

            oDB.intents.push(...db.intents);

        }


        if (db.resources) {

            oDB.resources.push(...db.resources);

        }


        if (db.globalBg) {

            cg('chat').style.backgroundImage = `url('${db.globalBg}')`;

        }


    });


}).catch(()=>{});const dSt={th:'light',fz:'14px',br:'30px',ent:true,tmp:false,aia:true,un:'ผู้ใช้งาน',bn:'Nat',p:'',cp:''};let st={...dSt},ch=[],lrn=[],ac=null,tF=null,tP='',tC='',rI=null,mR=null,aC=[],isR=false;const ajH=e=>{e.style.height='auto';e.style.height=e.scrollHeight+'px';cg('sB').disabled=!e.value.trim()&&!tF};const initApp=async()=>{st=(await idbKeyval.get('nStP'))||{...dSt};ch=(await idbKeyval.get('nChP'))||[];lrn=(await idbKeyval.get('nLrnP'))||[];tP=st.p;tC=st.cp;iSt();if(st.tmp&&ch.length>0)ac=0;rU()};initApp();const sD=async()=>{if(!st.tmp)await idbKeyval.set('nChP',ch);await idbKeyval.set('nStP',st);await idbKeyval.set('nLrnP',lrn);rU()};const rU=()=>{let h='',q=cg('sCh').value.toLowerCase();if(!st.tmp){ch.forEach((x,i)=>{if(q&&!x.n.toLowerCase().includes(q))return;let c=ac===i?'act':'';h+=`<div class="ci ${c}"><button onclick="lC(${i})">${x.n}</button><button class="act-b" onclick="oRn(${i})">✎</button><button class="act-b del-b" onclick="cDel('dC',${i})">✕</button></div>`})}cg('hL').innerHTML=h;let mH='',c=st.tmp?(ac?ac.m:[]):(ac!==null?ch[ac].m:[]);if(c.length>0){c.forEach((x,i)=>{let fi='',au='';if(x.f){if(x.ft.startsWith('image/'))fi=`<img src="${x.f}">`;else if(x.ft.startsWith('audio/'))au=`<audio controls src="${x.f}"></audio>`;else fi=`<div class="file-box"><div class="file-icon">📄</div><div class="file-info"><div class="file-name">${x.fn}</div><div class="file-size">${x.fs}</div></div></div>`}let pfp=st.p?`<img src="${st.p}" class="bot-icon" style="object-fit:cover">`:`<div class="bot-icon us">${st.un.charAt(0)}</div>`;let cp=st.cp?`<img src="${st.cp}" class="bot-icon" style="object-fit:cover">`:`<div class="bot-icon ai">${st.bn.charAt(0)}</div>`;let act=`<div class="m-act"><button onclick="cpT('${btoa(unescape(encodeURIComponent(x.t)))}')">📋</button><button onclick="rdT('${btoa(unescape(encodeURIComponent(x.t)))}')">🔊</button><button onclick="pM(${i})">📌</button></div>`;let txt=DOMPurify.sanitize(marked.parse(x.t));let cls=x.p?' pin':'';if(x.r==='u')mH+=`<div class="msg-wrap"><div style="flex:1"></div><div class="msg u-wrap${cls}">${fi}${au}<span>${txt}</span>${act}</div>${pfp}</div>`;else mH+=`<div class="msg-wrap">${cp}<div class="msg a-wrap${cls}">${fi}${au}<span>${txt}</span>${act}</div><div style="flex:1"></div></div>`})}else mH=`<div style="margin:auto;text-align:center;color:var(--txt);opacity:.6;margin-top:10vh"><h2>เวอร์ชั่น 0.4</h2><p>ว่าไง ${st.un} 😊 ${st.bn} อยากคุยจะแย่แล้ว 😁</p><div>`;cg('chat').innerHTML=mH;scB();d.querySelectorAll('pre code').forEach(e=>hljs.highlightElement(e))};const cpT=b=>{navigator.clipboard.writeText(decodeURIComponent(escape(atob(b))))};const rdT=b=>{let t=decodeURIComponent(escape(atob(b))),u=new SpeechSynthesisUtterance(t);u.lang=/[ก-๙]/.test(t)?'th-TH':'en-US';speechSynthesis.speak(u)};const pM=i=>{let m=st.tmp?ac.m:ch[ac].m;m[i].p=!m[i].p;sD()};const nC=()=>{if(st.tmp)ac={n:'แชทชั่วคราว',m:[]};else{ch.push({n:'...',m:[]});ac=ch.length-1;sD()}if(window.innerWidth<=768)cg('sb').classList.remove('act');rU()};const lC=i=>{if(st.tmp)return;ac=i;if(window.innerWidth<=768)cg('sb').classList.remove('act');rU()};const cDel=(t,i=null)=>{let m=cg('mRn');cg('mdlT').innerText=t==='dC'?'ต้องการลบ':(t==='clD'?'ต้องการลบประวัติแชททั้งหมดหรือไม่':'รีเซ็ตการตั้งค่า');cg('rn-inp').style.display='none';cg('mdlB').innerHTML=`<button class="btn" onclick="cg('mRn').style.display='none'">ยกเลิก</button><button class="btn" style="background:#ff4d4d;color:#fff" onclick="eDel('${t}',${i})">ยืนยัน</button>`;m.style.display='flex'};const eDel=(t,i)=>{if(t==='dC'){ch.splice(i,1);if(ac===i)ac=null;else if(ac>i)ac--}if(t==='clD'){ch=[];ac=null}if(t==='rsSt'){st={...dSt};iSt()}sD();cg('mRn').style.display='none'};const oRn=i=>{rI=i;cg('mdlT').innerText='เปลี่ยนชื่อแชท';cg('rn-inp').style.display='block';cg('rn-inp').value=ch[i].n;cg('mdlB').innerHTML=`<button class="btn" onclick="cg('mRn').style.display='none'">ยกเลิก</button><button class="btn btn-primary" onclick="sRn()">บันทึก</button>`;cg('mRn').style.display='flex'};const sRn=()=>{let v=cg('rn-inp').value.trim();if(v){ch[rI].n=v;sD()}cg('mRn').style.display='none'};const oSt=tb=>{cg('stMdl').style.display='flex';sT(tb)};const sT=tb=>{d.querySelectorAll('.t-btn').forEach(b=>b.classList.remove('act'));d.querySelectorAll('.st-sec').forEach(s=>s.classList.remove('act'));event.target.classList.add('act');cg(`s-${tb}`).classList.add('act')};const svSt=()=>{st.ent=cg('st-ent').checked;st.tmp=cg('st-tmp').checked;st.aia=cg('st-aia').checked;st.un=cg('st-un').value.trim()||st.un;st.bn=cg('st-bn').value.trim()||st.bn;st.th=cg('st-th').value;st.fz=cg('st-fz').value;st.br=cg('st-br').value;st.p=tP;st.cp=tC;sD();iSt();cg('stMdl').style.display='none'};const iSt=()=>{d.body.setAttribute('data-theme',st.th);d.documentElement.style.setProperty('--fz',st.fz);d.documentElement.style.setProperty('--br',st.br);cg('uName').innerText=st.un;cg('hTitle').innerText=st.bn;cg('uPfp').src=st.p||'';cg('uPfp').style.display=st.p?'block':'none';cg('hCp').innerHTML=st.cp?`<img src="${st.cp}" style="width:100%;height:100%;object-fit:cover">`:st.bn.charAt(0);cg('hCp').style.background=st.cp?'transparent':'';cg('st-ent').checked=st.ent;cg('st-tmp').checked=st.tmp;cg('st-aia').checked=st.aia;cg('st-un').value=st.un;cg('st-bn').value=st.bn;cg('st-th').value=st.th;cg('st-fz').value=st.fz;cg('st-br').value=st.br;cg('st-pfp-img').src=st.p||'';cg('st-cp-img').src=st.cp||'';cg('tmpBadge').style.display=st.tmp?'flex':'none';rLrn()};const rPfp=t=>{if(t==='u'){tP='';cg('st-pfp-img').src=''}else{tC='';cg('st-cp-img').src=''}};const hP=(e,t)=>{let f=e.target.files[0];if(f){let rd=new FileReader();rd.onload=v=>{if(t==='u'){tP=v.target.result;cg('st-pfp-img').src=tP}else{tC=v.target.result;cg('st-cp-img').src=tC}};rd.readAsDataURL(f)}e.target.value=''};const tTmp=e=>{st.tmp=e.checked;if(st.tmp)ac={n:'แชทชั่วคราว',m:[]};else ac=ch.length>0?0:null;sD();iSt()};const aLrn=()=>{let q=cg('l-q').value.trim(),a=cg('l-a').value.trim();if(q&&a){lrn.push({q,a});cg('l-q').value='';cg('l-a').value='';sD()}};const dLrn=i=>{lrn.splice(i,1);sD()};const rLrn=()=>{cg('lrnL').innerHTML=lrn.map((l,i)=>`<div class="lrn-item"><div><b>Q:</b> ${l.q}<br><span style="font-size:12px;opacity:.7"><b>A:</b> ${l.a}</span></div><button class="act-btn" style="color:#ff4d4d" onclick="dLrn(${i})">✕</button></div>`).join('')};const getAIResponse = async (text, history) => {

    if (!text) return 'ได้รับไฟล์แล้ว..';

    let lw = text.toLowerCase();

    for (let l of lrn) {

        if (lw.includes(l.q.toLowerCase())) return l.a.replace(/{u}/g, st.un);

    }

    try {

        if (/^[0-9+\-*/().\s]+$/.test(text.trim()) && text.trim().length > 0) {

            let res = new Function('return ' + text)();

            if (!isNaN(res)) return `${res}`;

        }

    } catch (e) {}

    if (oDB && oDB.intents) {


    for (let i of oDB.intents) {


        if (i.patterns.some(p => lw.includes(p))) {


            if (!i.index) i.index = 0;


            let res = i.responses[i.index];


            i.index++;


            if (i.index >= i.responses.length) {

                i.index = 0;

            }


            return res.replace(/{u}/g, st.un);

        }

    }


    let fb = oDB.intents.find(x => x.tag === 'fallback');


    if (fb) {


        if (!fb.index) fb.index = 0;


        let r = fb.responses[fb.index];


        fb.index++;


        if (fb.index >= fb.responses.length) {

            fb.index = 0;

        }


        return r.replace(/{u}/g, st.un);

    }

}

return "ฉันยังไม่มีข้อมูลนี้";

};const hK=e=>{if(st.ent&&e.key==='Enter'&&!e.shiftKey){e.preventDefault();sM()}};const sM = async () => {

    if (st.tmp) { if (!ac) ac = { n: 'แชทชั่วคราว', m: [] } }

    else if (ac === null) nC();

    let v = cg('inp').value.trim();

    if (!v && !tF) return;

    let mO = { r: 'u', t: v, p: false };

    if (tF) mO = { ...mO, ...tF };

    let tA = st.tmp ? ac.m : ch[ac].m;

    tA.push(mO);

    cg('inp').value = '';

    cg('inp').style.height = 'auto';

    cg('sB').disabled = true;

    let pF = tF;

    cPv();

    if (!st.tmp && tA.length === 1) ch[ac].n = v ? v.substring(0, 25) : 'แชท';

    rU();

    scB();

    let bO = { r: 'a', t: '...', p: false };

    if (st.aia && pF) {

        bO.f = pF.f; bO.fn = 'AI_' + pF.fn; bO.fs = pF.fs; bO.ft = pF.ft;

    }

    tA.push(bO);

    let aiMsgIndex = tA.length - 1;

    rU();

    scB();

    let aiText = await getAIResponse(v, tA.slice(0, -1)); 

    tA[aiMsgIndex].t = '';

    let chatBox = cg('chat');

    let msgSpans = chatBox.querySelectorAll('.a-wrap span');

    let targetSpan = msgSpans[msgSpans.length - 1];

    targetSpan.innerHTML = '';

    let typedText = '';

    let charIndex = 0;

    let typeSpeed = 25;

    let typeInterval = setInterval(() => {

        if (charIndex < aiText.length) {

            typedText += aiText.charAt(charIndex);

            targetSpan.innerHTML = typedText

                .replace(/\n/g, '<br>')

                .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')

                .replace(/\*(.*?)\*/g, '<i>$1</i>');

            if (charIndex % 10 === 0) scB(); 

            charIndex++;

        } else {

            clearInterval(typeInterval);

            tA[aiMsgIndex].t = aiText;

            sD();

            rU();

            scB();

        }

    }, typeSpeed);

};const frmB=b=>{if(b===0)return'0 B';let k=1024,s=['B','KB','MB','GB'],i=Math.floor(Math.log(b)/Math.log(k));return parseFloat((b/Math.pow(k,i)).toFixed(2))+' '+s[i]};const hF=e=>{let f=e.target.files[0];if(f){let rd=new FileReader();rd.onload=v=>{tF={f:v.target.result,fn:f.name,fs:frmB(f.size),ft:f.type};cg('pv').style.display='flex';cg('pvN').innerText=f.name;cg('pvC').innerHTML=f.type.startsWith('image/')?`<img src="${tF.f}">`:'📄';cg('sB').disabled=false};rd.readAsDataURL(f)}e.target.value=''};const cPv=()=>{tF=null;cg('pv').style.display='none';cg('pvC').innerHTML='';cg('pvN').innerText='';ajH(cg('inp'))};const tSB=()=>cg('sb').classList.toggle('act');const exD=()=>{let t=`★KBIOS_ARC_32★\n[#ST]=>${JSON.stringify(st)}\n[#CH]=>${JSON.stringify(ch)}\n[#LRN]=>${JSON.stringify(lrn)}\n★END★`;let u=URL.createObjectURL(new Blob([t],{type:'text/plain'})),a=d.createElement('a');a.href=u;a.download='Nat_Model.nat.ai.model.32.kbiossupwed';a.click();URL.revokeObjectURL(u)};const imD=e=>{let f=e.target.files[0];if(f){let rd=new FileReader();rd.onload=v=>{try{let t=v.target.result;if(t.includes('★KBIOS_ARC_32★')){let sM=t.match(/\[#ST\]=>(.*)/),cM=t.match(/\[#CH\]=>(.*)/),lM=t.match(/\[#LRN\]=>(.*)/);if(sM&&cM){st=JSON.parse(sM[1]);ch=JSON.parse(cM[1]);lrn=lM?JSON.parse(lM[1]):[];sD();iSt();alert('นำเข้าสำเร็จ!')}}else{let jd=JSON.parse(t);if(jd.st&&jd.ch){st=jd.st;ch=jd.ch;lrn=jd.lrn||[];sD();iSt();alert('นำเข้าสำเร็จ!')}}}catch(err){alert('ไฟล์ผิดรูปแบบ')}};rd.readAsText(f)}e.target.value=''};const tM=async()=>{let b=cg('micB');if(isR){mR.stop();b.classList.remove('rec');b.style.color='';isR=false;return}try{let s=await navigator.mediaDevices.getUserMedia({audio:true});mR=new MediaRecorder(s);aC=[];mR.ondataavailable=e=>aC.push(e.data);mR.onstop=()=>{let bl=new Blob(aC,{type:'audio/webm'}),rd=new FileReader();rd.onload=e=>{tF={f:e.target.result,fn:'Audio_Record',fs:frmB(bl.size),ft:'audio/webm'};cg('pv').style.display='flex';cg('pvN').innerText='ไฟล์เสียงบันทึก';cg('pvC').innerHTML='🎵';cg('sB').disabled=false};rd.readAsDataURL(bl);s.getTracks().forEach(t=>t.stop())};mR.start();b.classList.add('rec');b.style.color='#ff4d4d';isR=true}catch(e){alert('ไม่สามารถเข้าถึงไมค์ได้')}};const shC=()=>{if(navigator.share){let t=st.tmp?ac.m:ch[ac].m;let tx=t.map(x=>`${x.r==='u'?st.un:st.bn}: ${x.t}`).join('\n');navigator.share({title:'NAT Chat',text:tx}).catch(()=>{})}else alert('ไม่รองรับ')};const scB=()=>{let c=cg('chat');c.scrollTop=c.scrollHeight};const chkS=()=>{let c=cg('chat'),b=cg('scD');if(c.scrollHeight-c.scrollTop>c.clientHeight+100)b.style.display='flex';else b.style.display='none'};d.addEventListener('click',e=>{let sb=cg('sb'),sbt=cg('sbt');if(window.innerWidth<=768&&sb.classList.contains('act')&&!sb.contains(e.target)&&!sbt.contains(e.target))sb.classList.remove('act');let m=cg('m-pop'),p=cg('plusBtn');if(m&&m.style.display==='flex'&&!m.contains(e.target)&&e.target!==p)m.style.display='none'});const tglM=e=>{if(e)e.stopPropagation();let m=cg('m-pop');m.style.display=m.style.display==='flex'?'none':'flex'};const reqIt=t=>{cg('m-pop').style.display='none';let q=prompt(`อธิบาย${t==='image'?'รูป':'ไฟล์'}ที่ต้องการ:`);if(q&&q.trim()!==''){let mO={r:'u',t:`ฉันขอ${t==='image'?'รูป':'ไฟล์'}เกี่ยวกับ: ${q}`,p:false};let tA=st.tmp?ac.m:ch[ac].m;tA.push(mO);rU();scB();setTimeout(()=>fR(q.trim(),t),800)}};const fR=(q,t)=>{if(!oDB.resources){sAM('เอ๊ะ ฉันไม่สามารถให้ข้อมูลนี้ได้ลองเรื่องใหม่ดีไหม');return}let r=oDB.resources.filter(x=>x.type===t&&x.name.toLowerCase().includes(q.toLowerCase()));let m="";if(r.length>0){m=`${r.length}:\n`;r.forEach(x=>{if(t==='image')m+=`\n📌 **${x.name}**\n<img src="${x.url}" style="max-width:100%;border-radius:12px;margin-top:5px;box-shadow:0 2px 10px rgba(0,0,0,0.1);">\n<a href="${x.url}" target="_blank" style="color:var(--ac);font-size:12px;">[เปิดรูปเต็ม]</a>\n`;else m+=`\n📌 **${x.name}**\n<a href="${x.url}" target="_blank" style="color:var(--ac);font-weight:bold;">[ดาวน์โหลด]</a>\n`})}else{m=`😓 ขออภัย เกิดข้อผิดพลาดทางเทคนิค${t==='image'?'รูป':'ไฟล์'}: "${q}"\nสร้างไม่ได้ลองแบบอื่นดูนะ (ฉันเป็นเพียง Nat demo versiom เท่านั้น)`}sAM(m)};const sAM=t=>{let bO={r:'a',t,p:false};if(st.tmp)ac.m.push(bO);else ch[ac].m.push(bO);sD();rU()};