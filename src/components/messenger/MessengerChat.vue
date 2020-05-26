<template>

  <div class="messenger-chat" :class="activePanel">

    <div class="messenger-chat__list">

      <div v-for="item in messages"
           :key="item.id"
           :class="item.userId === userId ? 'message-out':'message-in' "
      >
        <div class="message__block">
          <span class="message__text"> {{item.text}} </span>
          <span class="message__date"> {{item.date|formatDT}}  </span>
        </div>
      </div>

      <div v-if="!contactId" class="message-system">
        <div class="message__block">
          <span class="message__text"> Выберите, кому хотели бы написать </span>
        </div>
      </div>

    </div>
    <!-- /.chat__list -->

    <div v-if="contactId">
      <form v-on:submit.prevent="onSendMessage" class="messenger-chat__form">
        <textarea v-model="messageInput"
                  class="messenger-chat__input"
                  placeholder="Введите сообщение (Ctrl+Enter)"
                  rows="5"
                  @keydown.prevent.ctrl.enter="onSendMessage"
        ></textarea>

        <button class="messenger-chat__send ">
          Send
        </button>
      </form>
    </div>
    <!-- /.send-form -->

  </div>
  <!-- /.messenger-chat -->
</template>

<script>


  export default {
    name: 'MessengerChat',

    props: {
      users:     Object, // все юзеры
      userId:    String, // владелец чата
      contactId: String, // респондент
      messages:  Array, // список сообщений

      activePanel: {
        type:    String,
        default: 'contact',
      },
    },

    data() {
      return {
        messageInput: '',
      }
    },

    methods: {
      onSendMessage() {
        if (!this.messageInput.trim().length) {
          return;
        } // не отправлять пустой

        this.$parent.$emit('sendMessage', {
          userId:    this.userId,
          contactId: this.contactId,
          text:      this.messageInput,
          date:      Date.now()
        });

        this.messageInput = '';
      },
    },

    filters: {
      formatDT: function (value) {
        const date = new Date(value);
        return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
      },
    }
  }

</script>

<style lang="scss" src="@/components/messenger/css/_messenger-chat.scss"></style>
