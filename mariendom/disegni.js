/* Disegni condivisi: pianta schematica dell'interno e vista esterna. Non in scala. */
window.DIS = {
  pianta(opt){
    const o=Object.assign({ink:'#3a2f2b',fill:'#f3ece6',acc:'#b0152b',gold:'#a8790a',bg:'#ffffff'},opt||{});
    const chap=[];for(let i=0;i<7;i++){const a=Math.PI*(1+ (i+0.5)/7);const cx=100+Math.cos(a)*44,cy=66+Math.sin(a)*44;chap.push(`<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="9" fill="${o.fill}" stroke="${o.ink}" stroke-width="1.4"/>`)}
    const cols=[];for(let y=165;y<=245;y+=16){cols.push(`<circle cx="80" cy="${y}" r="2.6" fill="${o.ink}"/><circle cx="120" cy="${y}" r="2.6" fill="${o.ink}"/>`)}
    return `<svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pianta schematica del Mariendom">
<rect width="200" height="300" fill="${o.bg}"/>
${chap.join('')}
<path d="M66 66 A34 34 0 0 1 134 66 L134 125 L66 125 Z" fill="${o.fill}" stroke="${o.ink}" stroke-width="1.6"/>
<rect x="80" y="8" width="40" height="30" rx="6" fill="${o.fill}" stroke="${o.ink}" stroke-width="1.6"/>
<rect x="92" y="34" width="16" height="6" fill="${o.fill}"/>
<rect x="15" y="125" width="170" height="30" fill="${o.fill}" stroke="${o.ink}" stroke-width="1.6"/>
<circle cx="15" cy="140" r="8" fill="${o.bg}" stroke="${o.gold}" stroke-width="2.4"/><circle cx="185" cy="140" r="8" fill="${o.bg}" stroke="${o.gold}" stroke-width="2.4"/>
<rect x="55" y="155" width="90" height="100" fill="${o.fill}" stroke="${o.ink}" stroke-width="1.6"/>
${cols.join('')}
<rect x="75" y="255" width="50" height="38" fill="${o.fill}" stroke="${o.ink}" stroke-width="1.6"/>
<rect x="88" y="246" width="24" height="6" fill="${o.acc}" opacity=".35"/>
<rect x="93" y="290" width="14" height="6" fill="${o.bg}"/>
<path d="M100 300 l-6 -9 h12z" fill="${o.acc}"/>
<rect x="93" y="82" width="14" height="14" fill="${o.gold}" opacity=".85"/>
<path d="M76 46 Q100 28 124 46 L124 62 L76 62 Z" fill="none" stroke="${o.acc}" stroke-width="1.4" stroke-dasharray="3 3"/>
<line x1="124" y1="52" x2="146" y2="66" stroke="${o.acc}" stroke-width="1" stroke-dasharray="2 2"/>
<g font-family="Atkinson Hyperlegible,Arial,sans-serif" font-size="8" fill="${o.ink}" text-anchor="middle">
<text x="100" y="286" font-size="7">Ingresso</text>
<text x="100" y="232" font-size="7">Navata</text>
<text x="15" y="166" font-size="6.5">Pace</text><text x="185" y="166" font-size="6.5">Guerra</text>
<text x="100" y="112" font-size="7">Coro</text>
<text x="100" y="34" font-size="6.5">Votiva</text>
<text x="168" y="80" font-size="6.5" fill="${o.acc}">cripta</text><text x="168" y="88" font-size="6" fill="${o.acc}">(sotto)</text>
</g></svg>`;
  },
  esterno(){
    const win=[];for(let i=0;i<6;i++){win.push(`<path d="M${28+i*24} 248v-38a8 8 0 0 1 16 0v38z" fill="#46627a"/><rect x="${24+i*24}" y="196" width="4" height="62" fill="#b9b0a0"/>`)}
    const crock=[];for(let k=0;k<9;k++){const y=36+k*13;crock.push(`<circle cx="${190-(k*1.2)}" cy="${y}" r="2" fill="#7d8a90"/><circle cx="${210+(k*1.2)}" cy="${y}" r="2" fill="#7d8a90"/>`)}
    return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Disegno della facciata del Mariendom con la torre">
<defs><linearGradient id="cielo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6fa9d8"/><stop offset="1" stop-color="#dcecf8"/></linearGradient>
<linearGradient id="pietra" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#d9d2c3"/><stop offset="1" stop-color="#bdb4a3"/></linearGradient></defs>
<rect width="400" height="300" fill="url(#cielo)"/>
<path d="M0 262 Q120 250 400 258 V300 H0z" fill="#a8b59a"/>
<rect x="18" y="190" width="150" height="72" fill="url(#pietra)"/><path d="M14 192 L92 160 L172 192z" fill="#5c6b73"/>
${win.join('')}
<rect x="232" y="190" width="150" height="72" fill="url(#pietra)"/><path d="M228 192 L306 160 L386 192z" fill="#5c6b73"/>
${[0,1,2,3,4,5].map(i=>`<path d="M${242+i*24} 248v-38a8 8 0 0 1 16 0v38z" fill="#46627a"/>`).join('')}
<rect x="168" y="120" width="64" height="142" fill="url(#pietra)"/>
<rect x="160" y="112" width="10" height="150" fill="#cfc7b6"/><rect x="230" y="112" width="10" height="150" fill="#bdb4a3"/>
<path d="M160 112 l5 -16 l5 16z M230 112 l5 -16 l5 16z" fill="#7d8a90"/>
<path d="M176 120 L200 22 L224 120z" fill="#6c7b82"/><path d="M200 22 L224 120 L212 120z" fill="#55636a"/>
${crock.join('')}
<path d="M199 22 v-14 M194 12 h10" stroke="#d4a017" stroke-width="2.4"/>
<circle cx="200" cy="152" r="16" fill="#46627a" stroke="#e8e1d2" stroke-width="3"/>
<path d="M200 136v32M184 152h32M189 141l22 22M211 141l-22 22" stroke="#e8e1d2" stroke-width="1.3"/>
<path d="M184 262v-52a16 16 0 0 1 32 0v52z" fill="#4a3426"/><path d="M180 210a20 20 0 0 1 40 0" fill="none" stroke="#e8e1d2" stroke-width="2"/>
<rect y="262" width="400" height="38" fill="#c9c1b4"/>
${Array.from({length:9},(_,i)=>`<circle cx="${40+i*42}" cy="${282+(i%2)*4}" r="5" fill="#3a2f2b"/><rect x="${37+i*42}" y="${287+(i%2)*4}" width="6" height="11" fill="#3a2f2b"/>`).join('')}
</svg>`;
  }
};

/* Navigazione: pianta con percorso e stati (fatto / qui / prossima / dopo) e icone */
window.DIS.nav = function(cur, o){
  o=Object.assign({acc:'#7d1d2c',grey:'#8a8079',light:'#d9d1c7',ink:'#3a2f2b',fill:'#f6f0e6',bg:'transparent',labels:false},o||{});
  const Z=window.DOM.zone, P=Z.map(z=>[z.x*2,z.y*3]);
  let base=window.DIS.pianta({ink:o.grey,fill:o.fill,acc:o.acc,gold:'#b08a3a',bg:o.bg});
  if(!o.labels) base=base.replace(/<g font-family[\s\S]*?<\/g>/,'');
  let seg='';
  for(let i=0;i<P.length-1;i++){
    const a=P[i],b=P[i+1],n=i+1; // segmento da zona n a n+1
    let st;
    if(cur && n<cur) st=`stroke="${o.acc}" stroke-width="3"`;
    else if(cur && n===cur) st=`stroke="${o.acc}" stroke-width="3" stroke-dasharray="5 4"`;
    else st=`stroke="${o.light}" stroke-width="2.4" stroke-dasharray="2 4"`;
    if(!cur) st=`stroke="${o.acc}" stroke-width="2.2" stroke-dasharray="5 4"`;
    seg+=`<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" ${st} stroke-linecap="round"/>`;
  }
  let mk='';
  P.forEach((p,i)=>{const n=i+1,[x,y]=p;let c;
    if(!cur) c=`<circle cx="${x}" cy="${y}" r="10" fill="${o.acc}"/><text x="${x}" y="${y+4}" fill="#fff">${n}</text>`;
    else if(n<cur) c=`<circle cx="${x}" cy="${y}" r="9" fill="#fff" stroke="${o.acc}" stroke-width="2"/><path d="M${x-4} ${y}l3 3 5-6" stroke="${o.acc}" stroke-width="2.2" fill="none"/>`;
    else if(n===cur) c=`<circle cx="${x}" cy="${y}" r="19" fill="${o.acc}" opacity=".18"/><circle cx="${x}" cy="${y}" r="13" fill="${o.acc}"/><text x="${x}" y="${y+5}" fill="#fff" font-size="14">${n}</text>`;
    else if(n===cur+1) c=`<circle cx="${x}" cy="${y}" r="10" fill="#fff" stroke="${o.grey}" stroke-width="2.4"/><text x="${x}" y="${y+4}" fill="${o.ink}">${n}</text>`;
    else c=`<circle cx="${x}" cy="${y}" r="8" fill="${o.light}"/><text x="${x}" y="${y+3.5}" fill="${o.grey}" font-size="9">${n}</text>`;
    mk+=c;});
  return base.replace('</svg>',`<g>${seg}</g><g font-family="Atkinson Hyperlegible,Arial,sans-serif" font-weight="700" font-size="11" text-anchor="middle">${mk}</g></svg>`);
};
window.DIS.ico = {
  tempo:'<svg viewBox="0 0 20 20" class="ico"><circle cx="10" cy="10" r="7.5"/><path d="M10 5.5V10l3 2"/></svg>',
  ascolta:'<svg viewBox="0 0 20 20" class="ico"><path d="M3.5 12V10a6.5 6.5 0 0 1 13 0v2"/><rect x="2.5" y="11.5" width="4" height="5.5" rx="1.5"/><rect x="13.5" y="11.5" width="4" height="5.5" rx="1.5"/></svg>',
  cerca:'<svg viewBox="0 0 20 20" class="ico"><circle cx="8.5" cy="8.5" r="5.5"/><path d="M12.5 12.5l5 5"/></svg>',
  dopo:'<svg viewBox="0 0 20 20" class="ico"><path d="M3 10h13M11.5 5.5 16 10l-4.5 4.5"/></svg>',
  guarda:'<svg viewBox="0 0 20 20" class="ico"><path d="M1.5 10S5 4.5 10 4.5 18.5 10 18.5 10 15 15.5 10 15.5 1.5 10 1.5 10z"/><circle cx="10" cy="10" r="2.6"/></svg>',
  foto:'<svg viewBox="0 0 20 20" class="ico"><rect x="2" y="5" width="16" height="11.5" rx="2"/><circle cx="10" cy="10.7" r="3.2"/><path d="M7 5l1.3-2h3.4L13 5"/></svg>'
};

/* "Ieri": il cantiere, illustrazione provvisoria in stile incisione (non una data precisa) */
window.DIS.cantiere = function(){
  let s=window.DIS.esterno();
  // toglie la parte alta della torre e la guglia, aggiunge impalcature, tono seppia
  s=s.replace(/<circle cx="[\d.]+" cy="[\d.]+" r="2" fill="#7d8a90"\/>/g,'').replace(/<path d="M176 120 L200 22 L224 120z"[^>]*\/>/,'').replace(/<path d="M200 22 L224 120 L212 120z"[^>]*\/>/,'')
     .replace(/<path d="M199 22 v-14 M194 12 h10"[^>]*\/>/,'');
  const sc=[];for(let x=164;x<=236;x+=12)sc.push(`<line x1="${x}" y1="70" x2="${x}" y2="262" stroke="#6b4a2a" stroke-width="2"/>`);
  for(let y=80;y<=250;y+=18)sc.push(`<line x1="158" y1="${y}" x2="242" y2="${y}" stroke="#6b4a2a" stroke-width="1.6"/>`);
  sc.push(`<path d="M164 70 L236 250 M236 70 L164 250" stroke="#6b4a2a" stroke-width="1.2"/>`);
  sc.push(`<rect x="168" y="70" width="64" height="50" fill="#d8c7a6"/><path d="M250 262 v-120 M250 142 h40 M290 142 v30" stroke="#5a3d22" stroke-width="3" fill="none"/>`);
  const hatch=Array.from({length:70},(_,i)=>`<line x1="${i*7}" y1="0" x2="${i*7-60}" y2="300"/>`).join('');
  return s.replace('</svg>',`<g>${sc.join('')}</g><g stroke="#3b2a1a" stroke-width=".6" opacity=".22">${hatch}</g></svg>`)
          .replace('<svg ','<svg style="filter:sepia(.85) saturate(.7) contrast(.95)" ');
};
