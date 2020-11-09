
const container = new Vue({
    el: '#container',
    data: {
        indexPhoto: 0,
        photos: [
            './images/image1.jpg',
            './images/image2.jpg',
            './images/image3.jpg',
            './images/image4.jpg',
        ]
    }, 
    methods: {
        nextPhoto() {
            this.indexPhoto += 1;

            if(this.indexPhoto > (this.photos.length - 1)) {
                this.indexPhoto = 0;
            }
        }
    }
});

