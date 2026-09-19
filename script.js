// Zone specifications data dictionary
const zonesData = {
    space: {
        title: "SPACE ZONE",
        badge: "Базовый Комфорт",
        cpu: "Intel Core i5-12400F",
        gpu: "NVIDIA GeForce RTX 4060",
        ram: "16 GB DDR4",
        monitor: "Pixel 280Hz",
        mouse: "Logitech G PRO Superlight 1",
        headset: "HyperX Cloud III",
        keyboard: "Dark Project KD87",
        price: "14.000 UZS / час",
        bgImg: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80"
    },
    pro: {
        title: "PRO ZONE",
        badge: "Высокий FPS",
        cpu: "Intel Core i7-12700K",
        gpu: "NVIDIA GeForce RTX 4070",
        ram: "32 GB DDR5",
        monitor: "Alienware 360Hz",
        mouse: "Logitech PRO X Superlight 2",
        headset: "Logitech PRO X SE",
        keyboard: "AULA F75",
        price: "18.000 UZS / час",
        bgImg: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80"
    },
    bootcamp: {
        title: "BOOTCAMP",
        badge: "Командная Зона",
        cpu: "AMD Ryzen 5 9600X",
        gpu: "NVIDIA GeForce RTX 5060",
        ram: "32 GB DDR5",
        monitor: "HKC 400Hz",
        mouse: "Logitech PRO X Superlight 2",
        headset: "Logitech PRO X SE",
        keyboard: "AULA F75",
        price: "20.000 UZS / час",
        bgImg: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80"
    },
    vip: {
        title: "VIP ZONE",
        badge: "Киберспортивный Премиум",
        cpu: "AMD Ryzen 7 7800X3D",
        gpu: "NVIDIA GeForce RTX 4070 Ti",
        ram: "32 GB DDR5",
        monitor: "Acer 600Hz",
        mouse: "Logitech PRO X2 Superstrike",
        headset: "HyperX Cloud III S Wireless",
        keyboard: "GravaStar V75 Lite",
        price: "25.000 UZS / час",
        bgImg: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80"
    },
    duo: {
        title: "DUO ZONE",
        badge: "Приватная Комната для двоих",
        cpu: "AMD Ryzen 9850X3D",
        gpu: "NVIDIA GeForce RTX 5070",
        ram: "32 GB DDR5",
        monitor: "Alienware 500Hz",
        mouse: "Logitech PRO X2 Superstrike",
        headset: "Logitech PRO X Wireless",
        keyboard: "AULA S75 (Механика)",
        price: "30.000 UZS / час",
        bgImg: "https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=1200&q=80"
    },
    solo: {
        title: "SOLO ZONE",
        badge: "Максимальный FPS 720Hz",
        cpu: "AMD Ryzen 7 9800X3D",
        gpu: "NVIDIA GeForce RTX 5070",
        ram: "32 GB DDR5",
        monitor: "ASUS 720Hz",
        mouse: "Logitech PRO X2 Superstrike (Магнитная)",
        headset: "Logitech PRO X2 Lightspeed",
        keyboard: "GravaStar V75 Lite (Магнитная)",
        price: "50.000 UZS / час",
        bgImg: "https://images.unsplash.com/photo-1616588589676-63b3dd98d655?auto=format&fit=crop&w=1200&q=80"
    }
};

function renderZoneDetails(zoneKey) {
    const data = zonesData[zoneKey];
    const container = document.getElementById('zone-display-container');

    container.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-card p-6 sm:p-10 rounded-3xl border border-arcane-border">
            <div class="lg:col-span-7">
                <div class="flex items-center gap-3 mb-4">
                    <span class="px-3 py-1 rounded-full text-xs font-black uppercase bg-arcane-purple/20 text-arcane-neon border border-arcane-purple/40">${data.badge}</span>
                    <span class="text-xs text-gray-400 font-bold">${data.price}</span>
                </div>
                
                <h3 class="text-3xl sm:text-5xl font-black text-white mb-8 font-display">${data.title}</h3>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div class="p-4 rounded-xl bg-arcane-bg/80 border border-arcane-border flex items-center gap-3">
                        <i class="fa-solid fa-microchip text-arcane-neon text-xl"></i>
                        <div><div class="text-xs text-gray-400 uppercase font-bold">Процессор</div><div class="text-white font-bold">${data.cpu}</div></div>
                    </div>
                    <div class="p-4 rounded-xl bg-arcane-bg/80 border border-arcane-border flex items-center gap-3">
                        <i class="fa-solid fa-memory text-arcane-green text-xl"></i>
                        <div><div class="text-xs text-gray-400 uppercase font-bold">Видеокарта</div><div class="text-white font-bold">${data.gpu}</div></div>
                    </div>
                    <div class="p-4 rounded-xl bg-arcane-bg/80 border border-arcane-border flex items-center gap-3">
                        <i class="fa-solid fa-desktop text-arcane-neon text-xl"></i>
                        <div><div class="text-xs text-gray-400 uppercase font-bold">Монитор</div><div class="text-white font-bold">${data.monitor}</div></div>
                    </div>
                    <div class="p-4 rounded-xl bg-arcane-bg/80 border border-arcane-border flex items-center gap-3">
                        <i class="fa-solid fa-keyboard text-arcane-green text-xl"></i>
                        <div><div class="text-xs text-gray-400 uppercase font-bold">Клавиатура</div><div class="text-white font-bold">${data.keyboard}</div></div>
                    </div>
                    <div class="p-4 rounded-xl bg-arcane-bg/80 border border-arcane-border flex items-center gap-3">
                        <i class="fa-solid fa-mouse text-arcane-neon text-xl"></i>
                        <div><div class="text-xs text-gray-400 uppercase font-bold">Мышь</div><div class="text-white font-bold">${data.mouse}</div></div>
                    </div>
                    <div class="p-4 rounded-xl bg-arcane-bg/80 border border-arcane-border flex items-center gap-3">
                        <i class="fa-solid fa-headphones text-arcane-green text-xl"></i>
                        <div><div class="text-xs text-gray-400 uppercase font-bold">Наушники</div><div class="text-white font-bold">${data.headset}</div></div>
                    </div>
                </div>

                <div class="mt-8 flex gap-4">
                    <button onclick="openBookingModal('${data.title}')" class="px-8 py-3.5 rounded-xl bg-gradient-to-r from-arcane-purple to-arcane-green text-black font-extrabold shadow-lg hover:scale-105 transition-all">
                        Забронировать ${data.title}
                    </button>
                </div>
            </div>

            <div class="lg:col-span-5 h-80 lg:h-full rounded-2xl overflow-hidden relative border border-arcane-border">
                <img src="${data.bgImg}" alt="${data.title}" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-arcane-bg via-transparent to-transparent"></div>
            </div>
        </div>
    `;
}

function switchZone(zoneKey) {
    document.querySelectorAll('.zone-tab-btn').forEach(btn => {
        btn.classList.remove('bg-arcane-purple', 'text-white', 'shadow-lg');
        btn.classList.add('bg-arcane-card', 'text-gray-300');
    });

    const activeTab = document.getElementById(`tab-${zoneKey}`);
    if (activeTab) {
        activeTab.classList.add('bg-arcane-purple', 'text-white', 'shadow-lg');
        activeTab.classList.remove('bg-arcane-card', 'text-gray-300');
    }

    renderZoneDetails(zoneKey);
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        if (mobileMenu.classList.contains('hidden')) {
            menuIcon.className = 'fa-solid fa-bars text-2xl';
        } else {
            menuIcon.className = 'fa-solid fa-xmark text-2xl';
        }
    });
}

document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.className = 'fa-solid fa-bars text-2xl';
    });
});

// Booking Modal Handlers
function openBookingModal(zoneName = '') {
    if (zoneName) {
        const titleElem = document.getElementById('modal-zone-title');
        if (titleElem) {
            titleElem.textContent = 'Бронирование: ' + zoneName;
        }
        
        const zoneElem = document.getElementById('book-zone');
        if (zoneElem) {
            zoneElem.value = zoneName.includes('720Hz') ? 'SOLO ZONE 720Hz' : zoneName;
        }
    }
    document.getElementById('booking-modal').classList.remove('hidden');
}

function closeBookingModal() {
    document.getElementById('booking-modal').classList.add('hidden');
}

// ОБНОВЛЕННАЯ ФУНКЦИЯ ОТПРАВКИ БРОНИ
function handleBookingSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('book-name').value;
    const phone = document.getElementById('book-phone').value;
    const zone = document.getElementById('book-zone').value;
    
    const countElem = document.getElementById('book-count');
    const count = countElem ? countElem.value : '1';
    
    // Получаем выбранный вариант из выпадающего списка
    const hours = document.getElementById('book-hours').value;

    const text = `Здравствуйте! Хочу забронировать ПК в Arcane.%0A` +
                 `👤 Имя: ${encodeURIComponent(name)}%0A` +
                 `📞 Телефон: ${encodeURIComponent(phone)}%0A` +
                 `🕹 Зона: ${encodeURIComponent(zone)}%0A` +
                 `🖥 Кол-во ПК: ${encodeURIComponent(count)}%0A` +
                 `⏱ Пакет/Время: ${encodeURIComponent(hours)}`;

    window.open(`https://t.me/arcane_adm?text=${text}`, '_blank');
    closeBookingModal();
}

// Tournament Modal Handlers
function openTournamentModal() {
    document.getElementById('tournament-modal').classList.remove('hidden');
}

function closeTournamentModal() {
    document.getElementById('tournament-modal').classList.add('hidden');
}

function handleTournamentSubmit(e) {
    e.preventDefault();
    const nick = document.getElementById('tourney-nick').value;
    const contact = document.getElementById('tourney-contact').value;
    const game = document.getElementById('tourney-game').value;

    const text = `Регистрация на МИКС-ТУРНИР 10 МЛН!%0AНикнейм: ${encodeURIComponent(nick)}%0AКонтакт: ${encodeURIComponent(contact)}%0AИгра: ${encodeURIComponent(game)}`;
    window.open(`https://t.me/arcane_adm?text=${text}`, '_blank');
    closeTournamentModal();
}

// Initialize default view
window.addEventListener('DOMContentLoaded', () => {
    renderZoneDetails('space');
});

// Функция для добавления анимации на любой элемент
function addAnimation(elementSelector, animationName) {
    const element = document.querySelector(elementSelector);
    if (element) {
        element.classList.add('animate__animated', `animate__${animationName}`);
        
        element.addEventListener('animationend', () => {
            element.classList.remove('animate__animated', `animate__${animationName}`);
        }, { once: true });
    }
}

// Анимация кнопки
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.btn');
    if (button) {
        button.addEventListener('click', () => {
            addAnimation('.btn', 'rubberBand');
        });
    }
});
