// script.js

// Store Status Jam Buka/Tutup const storeStatusEl = document.getElementById('storeStatus'); function checkStoreStatus() { const now = new Date(); const hour = now.getHours(); if(hour >= 13 && hour < 20){ storeStatusEl.textContent = 'Toko Sedang Buka'; storeStatusEl.className = 'store-status open'; } else { storeStatusEl.textContent = 'Toko Sedang Tutup'; storeStatusEl.className = 'store-status closed'; } } if(storeStatusEl){checkStoreStatus(); setInterval(checkStoreStatus, 60000);}

// Keranjang Belanja Interaktif let cart = JSON.parse(localStorage.getItem('jwstoreCart')) || [];

function addToCart(name, price){ let exist = cart.find(item => item.name === name); if(exist){ exist.qty++; } else { cart.push({name, price, qty:1}); } localStorage.setItem('jwstoreCart', JSON.stringify(cart)); alert(name + ' berhasil ditambahkan ke keranjang!'); }

function renderCart(){ const container = document.getElementById('cartItems'); const total = document.getElementById('totalPrice'); if(!container) return; container.innerHTML = ''; let sum = 0; cart.forEach((item,index)=>{ sum += item.price * item.qty; container.innerHTML += <div class='cart-item'>${item.name} x${item.qty} - Rp ${item.price*item.qty} <button onclick='removeItem(${index})'>Hapus</button></div>; }); total.textContent = Total: Rp ${sum}; }

function removeItem(index){ cart.splice(index,1); localStorage.setItem('jwstoreCart',JSON.stringify(cart)); renderCart(); }

const checkoutBtn = document.getElementById('checkoutBtn'); if(checkoutBtn){ checkoutBtn.addEventListener('click',()=>{ if(cart.length===0) return alert('Keranjang kosong!'); let msg = 'Halo JWSTORE! Saya mau pesan produk berikut:%0A'; let total=0; cart.forEach(item=>{ msg += - ${item.name} x${item.qty}%0A; total+=item.price*item.qty; }); msg += Total: Rp ${total}; const waLink = https://wa.me/6285712707803?text=${msg}; window.open(waLink,'_blank'); }); }

if(document.getElementById('cartItems')) renderCart();

// Order Form WhatsApp const orderForm = document.getElementById('orderForm'); if(orderForm){ orderForm.addEventListener('submit',(e)=>{ e.preventDefault(); const name=document.getElementById('name').value; const address=document.getElementById('address').value; const wa=document.getElementById('wa').value; const product=document.getElementById('product').value; let msg=Halo JWSTORE!%0ANama: ${name}%0AAlamat: ${address}%0ANomor WA: ${wa}%0AProduk: ${product}; window.open(https://wa.me/6285712707803?text=${msg},'_blank'); }); }

// Animasi Tanda Tangan (tentang.html) window.addEventListener('DOMContentLoaded',()=>{ const signature = document.getElementById('signature'); if(signature){ signature.textContent='Akbar Satrio Widiasto'; } });

