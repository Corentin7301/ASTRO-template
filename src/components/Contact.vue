<template>
  <div>
    <button @click="isOpen = !isOpen" @keydown.esc="escapeKey()" class="focus:outline-white"><svg class="w-12 h-12 text-lightColor hover:opacity-75 transition-all" fill="none"
        stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
        </path>
      </svg></button>


    <!-- modale -->

    <div v-show="isOpen" class="fixed z-30 blurPerso top-0 left-0 w-full h-full" @click="isOpen = !isOpen">
    </div>
    <div v-show="isOpen" @keydown.esc="escapeKey()"
      class=" bg-persoBlue w-[85%] lg:w-1/3 z-50 fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 rounded-md py-5 px-6 transition-all shadow-xl">
      <svg @click="isOpen = false"
        class="absolute top-1 right-1 w-10 h-10 text-lightColor cursor-pointer lg:hover:opacity-75 transition-all"
        fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
      <p class=" text-lightColor text-center lg:text-2xl">Contact</p>
      <form action="/thanks" method="POST" name="contact-portfolio" netlify netlify-honeypot="bot-field" class=" space-y-3 mt-5 flex flex-col justify-center items-center">
        <input type="text" name="name" id="name" placeholder="Nom et prénom" required>
        <input type="email" name="email" id="email" placeholder="Email" required>
        <textarea name="message" id="message" cols="30" rows="10" placeholder="Message" required></textarea>
        <input type="submit" value="Envoyer" class=" bg-white">
      </form>
      <div class="space-y-2 mt-2">
        <div class="flex items-center space-x-3">
          <svg class="w-6 h-6 text-lightColor" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
            </path>
          </svg>
          <a :href="`tel:${informationsDatas.phone.phoneUrl}`"
            class=" text-lightColor lg:hover:opacity-75 transition-all focus:outline-white">{{informationsDatas.phone.phoneLabel}}</a>
        </div>
        <div class="flex items-center space-x-3 ">
          <svg class="w-6 h-6 text-lightColor" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
            </path>
          </svg>
          <a :href="`mailto:${informationsDatas.email}`"
            class=" text-lightColor lg:hover:opacity-75 transition-all focus:outline-white">{{informationsDatas.email}}</a>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  import informationsDatas from "../datas/informationDatas.json";
  export default {
    data() {
      return {
        isOpen: false,
        informationsDatas,
      }
    },
    methods: {
      escapeKey() {
        this.isOpen = !this.isOpen
      }
    },
    watch: {
      isOpen: (isOpen) => {
        const body = document.querySelector("body")
        if(isOpen == true) {
          console.log(body);
          body.style.overflow = "hidden";
        } else {
          body.style.overflow = "auto";
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .blurPerso {
    backdrop-filter: blur(11px);
  }

  input,
  textarea {
    @apply w-full block rounded-md py-1 px-2 m-auto focus:outline-white;
  }

  input::placeholder,
  textarea::placeholder {
    color: rgba(0, 0, 0, 0.45);
  }

  input[type=submit] {
    @apply w-32 m-0 self-end border-2 border-transparent transition-all cursor-pointer;
    color: rgba(0, 0, 0, 0.45);

    &:hover {
      @apply text-lightColor bg-persoBlue border-lightColor transition-all;
    }
  }
</style>