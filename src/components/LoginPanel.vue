<template>

  <div class="login-panel">

    <div class="col">
      <label>Имя:</label>
      <input v-model.trim="name"
             type="text"
             class="login-panel__name"
             placeholder=""
      >
    </div>
    <div class="col">
      <label>URL: </label>
      <input v-model.trim="url"
             type="text"
             class="login-panel__url"
             placeholder="URL картинки"
             @click="url=''"
      >
    </div>

    <button @click.stop="onAutoAvatar" class="login-panel__btn ">
      авто
    </button>

    <button @click.stop="onAdd" class="login-panel__btn ">
      Добавить
    </button>

    <avatar v-show="url"
            :url="url"
    ></avatar>
  </div>

</template>

<script>
  import genId from '@/js/gen-id.js';
  import Avatar from '@/components/messenger/Avatar.vue'

  export default {
    name:       "LoginPanel",
    components: {
      Avatar,
    },

    data() {
      return {

        // имя пользователя
        name: '',
        // форма регитсрации юзера
        url:  'https://download-cs.net/steam/avatars/3190.jpg',

        // список аватар
        // 'https://download-cs.net/steam/avatars/3190.jpg', 3190 - 3452

      }
    },

    methods: {
      onAdd() {
        if (!this.name.trim().length || !this.url.trim().length) {
          return;
        } // не добавлять пустой

        this.$emit('addUser', {id: genId(), name: this.name, url: this.url});
        this.name = this.url = '';
      },

      onAutoAvatar() {
        const randomNumber = function (min, max) {
          return Math.floor(Math.random() * (max - min + 1) + min);
        };
        this.url           = 'https://download-cs.net/steam/avatars/' + randomNumber(5, 3000) + '.jpg';
      }
    },

    mounted() {
      // + Иван Иванов
      this.name = 'Иван Иванов';
      this.onAutoAvatar();
      this.onAdd();
    }
  }
</script>


<style lang="scss" src="@/components/css/_login-panel.scss"></style>
