import {data} from "../assets/data/data.js";
import {addClassElement, getQueryParameter, removeClassElement} from "../utils/helper.js";

export const welcome = () => {
    const welcomeElement = document.querySelector('.welcome');
    const homeElement = document.querySelector('.home');
    const navbarElement = document.querySelector('header nav');

    const [_, figureElement, weddingToElement, openWeddingButton] = welcomeElement.children;
    const [audioMusic, audioButton] = document.querySelector('.audio').children;
    const [iconButton] = audioButton.children;

    // Fungsi untuk menghasilkan konten figure (gambar dan nama mempelai)
    const generateFigureContent = (bride) => {
        const {L: {name: brideLName}, P: {name: bridePName}, couple: coupleImage} = bride;
        return `
            <img src="${coupleImage}" alt="animasi pasangan">
            <figcaption>
                ${bridePName.split(' ')[0]} & ${brideLName.split(' ')[0]}
            </figcaption>`;
    };

    // Fungsi untuk menghasilkan konten parameter (nama penerima undangan)
    const generateParameterContent = () => {
        const name = document.querySelector('#name');
        const params = getQueryParameter('to');

        if (params) {
            weddingToElement.innerHTML = `Kepada Yth Bapak/Ibu/Saudara/i<br><span>${params}</span>`;
            name.value = params;
        } else {
            weddingToElement.innerHTML = `Kepada Yth Bapak/Ibu/Saudara/i<br><span>Teman-teman semua</span>`;
        }
    }

    // Fungsi untuk menginisialisasi audio
    const initialAudio = () => {
        let isPlaying = false;

        // Setel sumber audio dan preload
        audioMusic.innerHTML = `<source src="${data.audio}" type="audio/mp3"/>`;
        audioMusic.preload = 'auto'; // Preload audio untuk memastikan siap diputar
        audioMusic.load(); // Memuat audio secara eksplisit

        audioButton.addEventListener('click', () => {
            if (!isPlaying) {
                // Putar audio
                audioMusic.play().then(() => {
                    addClassElement(audioButton, 'active');
                    removeClassElement(iconButton, 'bx-play-circle');
                    addClassElement(iconButton, 'bx-pause-circle');
                    isPlaying = true;
                    console.log('Audio berhasil diputar melalui tombol');
                }).catch(error => {
                    console.error('Gagal memutar audio melalui tombol:', error);
                });
            } else {
                // Jeda audio
                audioMusic.pause();
                removeClassElement(audioButton, 'active');
                removeClassElement(iconButton, 'bx-pause-circle');
                addClassElement(iconButton, 'bx-play-circle');
                isPlaying = false;
                console.log('Audio dijeda');
            }
        });
    };

    // Event listener untuk tombol "Buka Undangan"
    openWeddingButton.addEventListener('click', () => {
        // Setel kelas untuk animasi
        addClassElement(document.body, 'active');
        addClassElement(welcomeElement, 'hide');
        addClassElement(homeElement, 'active');
        addClassElement(navbarElement, 'active');
        addClassElement(audioButton, 'show');

        // Gulir ke atas halaman
        window.scrollTo(0, 0);

        // Coba putar audio langsung setelah klik
        removeClassElement(iconButton, 'bx-play-circle');
        addClassElement(iconButton, 'bx-pause-circle');
        audioMusic.play().then(() => {
            console.log('Audio berhasil dimulai secara otomatis setelah klik Buka Undangan');
        }).catch(error => {
            console.error('Gagal memutar audio secara otomatis:', error);
            // Fallback: Kembalikan ke ikon play jika gagal
            removeClassElement(iconButton, 'bx-pause-circle');
            addClassElement(iconButton, 'bx-play-circle');
        });

        // Animasi tambahan untuk tombol audio
        setTimeout(() => {
            addClassElement(audioButton, 'active');
        }, 1000);
    });

    // Fungsi untuk menginisialisasi halaman sambutan
    const initializeWelcome = () => {
        figureElement.innerHTML = generateFigureContent(data.bride);
        generateParameterContent();
        addClassElement(welcomeElement, 'active');
    }

    initializeWelcome();
    initialAudio();
}