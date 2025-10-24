
// animações, por tekashydev©
    

// Barra lateral esquerda 

    
    // Anos no rodapé *obs.: vai todo mundo morrer e esse site vai continuar atualizando o ano sozinho ksksksk*
document.getElementById('year').textContent = new Date().getFullYear();

    // Copiar IP
function copy(sel){
    const el = document.querySelector(sel);
    if(!el) return;
    el.select(); el.setSelectionRange(0, 99999);
    try{ document.execCommand('copy'); }catch(e){ navigator.clipboard?.writeText(el.value) }
}
document.getElementById('copy-ip')?.addEventListener('click',()=>copy('#server-ip'));
document.getElementById('copy-ip-2')?.addEventListener('click',()=>copy('#server-ip'));

    // Placeholder de status (substituir pelo fetch real do seu endpoint)
const players = Math.floor(Math.random()*120);
document.getElementById('s-players').textContent = players > 0 ? players : 'Offline';
document.getElementById('s-players').style.color = players>0? 'var(--ok)' : 'var(--danger)';
const ping = players>0? (50+Math.floor(Math.random()*40)) : 0;
document.getElementById('s-ping').textContent = players>0? ping + ' ms' : '--';
