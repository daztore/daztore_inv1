export const data = {
    bride: {
        L: {
            id: 2,
            name: 'Rizki Bagus Al\'hamzah',
            child: 'Putra pertama',
            father: 'Rudi Sulaiman',
            mother: 'Rahayu Handayani (Almh)',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 1,
            name: 'Ulfi Atika Permatasari',
            child: 'Putri pertama',
            father: 'Tariyono',
            mother: 'Sri Mardiati',
            image: './src/assets/images/cewe.png'
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2025',
            month: 'Juni',
            date: '17',
            day: 'Selasa',
            hours: {
                start: '09.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2025',
            month: 'Juni',
            date: '17',
            day: 'Selasa',
            hours: {
                start: '18.00',
                finish: 'Selesai'
            }
        },
        address: 'Wonosari Mulyo XI/31 Kelurahan Wonokusumo Kecamatan Semampir Kota Surabaya'
    },

    link: {
        calendar: 'https://calendar.app.google/3sd89LLDF5UupYsz5',
        map: 'https://maps.app.goo.gl/gYoBCKRC5D78hCaa7',
    },

    // galeri: [
    //     {
    //         id: 1,
    //         image: './src/assets/images/1.png'
    //     },
    //     {
    //         id: 2,
    //         image: './src/assets/images/2.png'
    //     },
    //     {
    //         id: 3,
    //         image: './src/assets/images/3.png'
    //     },
    //     {
    //         id: 4,
    //         image: './src/assets/images/4.png'
    //     },
    //     {
    //         id: 5,
    //         image: './src/assets/images/5.png'
    //     }
    // ],

    bank: [
        {
            id: 1,
            name: 'Ulfi Atika Permatasari',
            icon: './src/assets/images/bca.png',
            rekening: '0101597023'
        },
        {
            id: 2,
            name: 'Ulfi Atika Permatasari',
            icon: './src/assets/images/bni.png',
            rekening: '1210214870'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    // api: 'https://script.google.com/macros/s/AKfycbyydz6N4p2VWUG8zsXeURv6ap9RP8a4eC3x6N3x6qTDjMVr1cIBz9S0NsHw2rWvBOSXGg/exec',
    api: 'https://script.google.com/macros/s/AKfycbzHlT7Mf2lolgOg43CNobj6ZFsW0PWg0adjjQQGsSnJzKQtT9Ca7zLW2bgmmaoD6lkP/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        // {
        //     id: 4,
        //     teks: 'Galeri',
        //     icon: 'bx bxs-photo-album',
        //     path: '#galeri',
        // },
        {
            id: 4,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}