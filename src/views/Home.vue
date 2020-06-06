<template>
    <div class="container">
        <SidebarOne />
        <main-app-content v-bind:componentTitle="componentTitle">
            <div id="home-page-title">
                <p>Welcome to Home page</p>
            </div>
            <div id="home-page-content">
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
            <div id="home-page-content-two">
                <div id="content-two-image">
                    <img src="../assets/forest.jpg" alt="Forest">
                </div>
                <div id="content-two-text">
                    <div id="content-two-text-title">
                        <p>Example title</p>
                    </div>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
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

    export default {
        name: "Home",
        components: {
            SidebarOne,
            SidebarTwo,
            MainAppContent,
            Footer
        },
        data() {
            return {
                componentTitle: "Home"
            }
        }
    }
</script>

<style scoped>
#home-page-title {
    font-size: 20px;
    margin-bottom: 10px;
} 

#home-page-content {
    border-bottom: 1px solid #808080;
    margin-bottom: 10px;
}   

#home-page-content p {
    font-size: 14px;
    text-align: justify;
    margin-bottom: 10px;
}

#content-two-image, #content-two-text {
    float: left;
    width: 50%;
    height: 300px;
}

#content-two-image img {
    width: 100%;
    height: 100%;
}

#content-two-text {
    padding-left: 10px;
}

#content-two-text p {
    text-align: justify;
    font-size: 14px;
}

#content-two-text-title {
    margin-bottom: 10px;
}

#content-two-text-title p {
    font-size: 18px;
}
</style>