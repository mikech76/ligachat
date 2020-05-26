<template>
  <div class="column">
    <LoginPanel
            @addUser="onCreateMessenger"
    ></LoginPanel>

    <div class="chat-room">
      <Messenger
              v-for="user in users"
              :key="user.id"
              :userId="user.id"
              :users="users"
              :chatData="{messages,messageIndex}"
              @sendMessage="onSendMessage"
              @closeMessendger="onCloseMessendger"
      ></Messenger>
    </div>
    <!-- /.chat-room -->
  </div>
</template>

<script>
  import genId from '@/js/gen-id.js';

  import LoginPanel from '@/components/LoginPanel.vue'
  import Messenger from '@/components/messenger/Messenger.vue'

  export default {
    name: "ChatRoom",
    data() {
      return {
        // Юзеры, для каждого свой мессенджер
        users:        {
          /*  'q123': {
              id:   'q123', // genId(),
              name: 'Иван Иваныч',
              url:  'https://cs-legenda.ru/files/avatars/1538614126.jpg',

            },*/

        },
        // сообщения id:{id, out, in, text, time}
        messages:     {},
        // индекс сообщений { userId: { contactId: [ mId, mId ... ] } }
        messageIndex: {},
      }
    },

    methods: {
      // создание чата
      onCreateMessenger(user) {
        this.$set(this.users, user.id, user);
      },

      // закрытие чата
      onCloseMessendger(userId) {
        console.log(userId, this.users)
        this.$delete(this.users, userId);
      },

      // сохранение сообщений
      onSendMessage(message) {
        message.id = message.date + genId();

        /// добавим  в банк сообщений
        this.$set(this.messages, message.id, message);

        /// в индекс
        const toIndex = (index, messageId) => {

          if (!(this.messageIndex[index] instanceof Object)) {
            this.$set(this.messageIndex, index, []);
          }
          this.messageIndex[index].push(messageId);
        };

        toIndex(message.userId + '_' + message.contactId, message.id);
        if (message.userId !== message.contactId) {
          toIndex(message.contactId + '_' + message.userId, message.id);
        }
      },


    },

    components: {
      LoginPanel,
      Messenger
    },
  }

</script>

<style lang="scss" src="@/components/css/_chat-room.scss"></style>
