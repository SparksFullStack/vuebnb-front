const app = new Vue({
    // data and mounting
    el: '#app',
    data: {
        title: sample.title,
        address: sample.address,
        about: sample.about,
        amenities: sample.amenities,
        prices: sample.prices,
        headerImageStyle: {
            'background-image': 'url(sample/header.jpg)'
        },
        contracted: true,
        modalOpen: false
    },

    // methods and listeners
    methods: {
        escapeKeyListener(evt) {
            if (evt.keyCode === 27 && app.modalOpen) {
                app.modalOpen = false;
            }
        }
    },
    watch: {
        modalOpen() {
            if (this.modalOpen) {
                document.body.classList.add('modal-open');
            } else {
                document.body.classList.remove('modal-open');
            }
        }
    },

    // lifecycle hooks
    created() {
        document.addEventListener('keyup', this.escapeKeyListener)
    },
    destroyed: function () {
        document.removeEventListener('keyup', this.escapeKeyListener);
    }
})