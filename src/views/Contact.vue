<template>
    <div class="container">
        <SidebarOne />
        <main-app-content v-bind:componentTitle="componentTitle">
            <div id="contact-form-box">
                <form id="contact-form">

                    <div id="contact-name-box">
                        <div id="contact-name-label">
                            <font color="red">*</font>
                            <label for="contactName">Name:</label>
                        </div>
                        <div id="contact-name-field">
                            <input type="text" name="contactName" id="contactName" v-model="contactName" placeholder="Your Name..." autocomplete="off">
                        </div>
                    </div>

                    <div id="contact-email-box">
                        <div id="contact-email-label">
                            <font color="red">*</font>
                            <label for="contactEmail">Email:</label>
                        </div>
                        <div id="contact-email-field">
                            <input type="text" name="contactEmail" id="contactEmail" v-model="contactEmail" placeholder="Your Email address..." autocomplete="off">
                        </div>
                    </div>

                    <div id="contact-message-box">
                        <div id="contact-message-label">
                            <font color="red">*</font>
                            <label for="contactMessage">Message:</label>
                        </div>
                        <div id="contact-message-field">
                            <textarea name="contactMessage" id="contactMessage" rows="10" placeholder="Your Message..." v-model="contactMessage" autocomplete="off"></textarea>
                        </div>
                    </div>

                    <div id="contact-button-box">
                        <button type="button" id="contact-button" v-on:click="validateContactForm">SEND</button>
                    </div>

                </form>
            </div>
            <div id="contact-form-details">
                <div id="contact-form-name-detail">
                    <p><strong>Your Name is: </strong>{{ contactName | capitalize }}</p>
                </div>
                <div id="contact-form-email-detail">
                    <p><strong>Your Email is: </strong>{{ contactEmail }}</p>
                </div>
                <div id="contact-form-message-detail">
                    <p><strong>Your Message is: </strong>{{ contactMessage | capitalize }}</p>
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
        name: "Contact",
        components: {
            SidebarOne,
            SidebarTwo,
            MainAppContent,
            Footer
        },
        data() {
            return {
                componentTitle: "Contact",
                contactName: '',
                contactEmail: '',
                contactMessage: '',
                errors: []
            }
        },
        methods: {
            validateContactForm: function () {
                if(this.contactName && this.contactEmail && this.contactMessage){
                    return true;
                }
                if(!this.contactName){
                    this.errors.push('Name field can not be empty.');
                }
                if(!this.contactEmail){
                    this.errors.push('Email field can not be empty.');
                }
                if(!this.contactMessage){
                    this.errors.push('Message field can not be empty.');
                }
                console.log(this.errors);
            }
        },
        filters: {
            capitalize: function (value) {
                if(!value) return ''
                value = value.trim()
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)    
            }
        }
    }
</script>

<style scoped>
#contactName, #contactMessage, #contactEmail {
    padding: 5px;
    outline: none;
    width: 100%;
}

#contact-name-box, #contact-message-box,  #contact-email-box {
    margin-bottom: 10px;
} 

#contact-name-label, #contact-message-label, #contact-email-label {
    margin-bottom: 2px;
}  

#contactName:focus, #contactEmail:focus, #contactMessage:focus {
    outline-color: #808080;
    outline-style: solid;
}

#contactMessage {
    resize: vertical;
}

#contact-button {
    padding: 10px 15px 10px 15px;
    background-color: white;
    outline: none;
    border: 1px solid black;
}

#contact-button:hover {
    background-color: #3697C8FF;
    color: white;
    transition: 0.4s;
}

#contact-form-box {
    border-bottom: 1px solid #808080;
    padding-bottom: 10px;
}

#contact-form-details {
    margin-top: 10px;
}

#contact-form-name-detail, #contact-form-email-detail, #contact-form-message-detail {
    margin-bottom: 10px;
}
</style>