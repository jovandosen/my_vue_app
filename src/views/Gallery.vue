<template>
    <div class="container">
        <SidebarOne />
        <main-app-content v-bind:componentTitle="componentTitle">
            <div id="gallery-box">
                <GalleryImage v-for="image in images" v-bind:key="image.id" v-bind:image="image" /> 
            </div>
        </main-app-content>
        <SidebarTwo /> 
        <Footer />     
    </div>
</template>

<script>
    import SidebarOne from '../components/SidebarOne.vue'
    import SidebarTwo from '../components/SidebarTwo.vue'
    import MainAppContent from '../components/MainAppContent.vue'
    import Footer from '../components/Footer.vue'
    import GalleryImage from '../components/Image.vue'

    export default {
        name: "Gallery",
        components: {
            SidebarOne,
            SidebarTwo,
            MainAppContent,
            Footer,
            GalleryImage
        },
        data() {
            return {
                componentTitle: "Gallery",
                images: [
                    { id: 1, name: 'Bird', src: 'bird.jpg' },
                    { id: 2, name: 'Car', src: 'car.jpg' },
                    { id: 3, name: 'Earth', src: 'earth.jpg' },
                    { id: 4, name: 'Forest', src: 'forest.jpg' },
                    { id: 5, name: 'Moon', src: 'moon.jpg' },
                    { id: 6, name: 'Rocks', src: 'rocks.jpg' },
                    { id: 7, name: 'Sea', src: 'sea.jpg' },
                    { id: 8, name: 'Space', src: 'space.jpg' },
                    { id: 9, name: 'Waterfall', src: 'waterfall.jpg' }
                ]
            }
        }
    }
</script>

<style scoped>
#gallery-box img {
    width: 33%;
    height: 200px;
    margin-right: 2px;
}

#gallery-box img:hover {
    opacity: 0.7;
    cursor: pointer;
}   
</style>