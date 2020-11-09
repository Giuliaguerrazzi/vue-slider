
const container = new Vue({
    el: '#container',
    data: {
        indexPhoto: 0,
        photos: [
            './images/image1.jpg',
            './images/image2.jpg',
            './images/image3.jpg',
            './images/image4.jpg',
            './images/image5.jpg',
            './images/image6.jpg',
        ],
        intervalId: 0,
    }, 
    created() {
        this.startLoop();
    },
    methods: {
        nextPhoto() {
            this.indexPhoto += 1;

            if(this.indexPhoto > (this.photos.length - 1)) {
                this.indexPhoto = 0;
            }
        },

        prevPhoto() {
            this.indexPhoto -= 1;
            
            if(this.indexPhoto < 0) {
                this.indexPhoto = this.photos.length - 1;
            }
        },
        setPhoto(index) {
            this.indexPhoto = index;
        },
        startLoop() {
            this.intervalId = setInterval(() => {
                this.nextPhoto();
            } ,2000);
        },
        stopLoop(){
            clearInterval(this.intervalId);
        }
    }
});

