<template>

  <div class="messenger"
       :class="width<540 ? 'small':'' "
       :ref="userId+'messenger'"
  >
    <div class="row">

      <MessengerPanel
              :activePanel="activePanel"
              :user="users[userId]"
              :contact="users[contactId]"
              @setActivePanel="onSetActivePanel"
      ></MessengerPanel>

    </div>

    <div class="row stretch">

      <MessengerContacts
              :users="users"
              :userId="userId"
              :contactId="contactId"
              :activePanel="isActive('contact')"
              @onSetContact="onSetContact"
      ></MessengerContacts>

      <MessengerChat
              :users="users"
              :userId="userId"
              :contactId="contactId"
              :messages="messages"
              :activePanel="isActive('chat')"
      ></MessengerChat>

    </div>

  </div>
  <!-- /.messenger -->
</template>

<script>
  import MessengerPanel from '@/components/messenger/MessengerPanel.vue'
  import MessengerContacts from '@/components/messenger/MessengerContacts.vue'
  import MessengerChat from '@/components/messenger/MessengerChat.vue'

  export default {
    name: 'Messenger',

    props: {
      userId:   String, // владелец чата
      users:    Object, // все юзеры
      chatData: Object, // база сообщений
    },

    data() {
      return {
        // респондент
        contactId: null,

        // Активная вкладка в узком режиме
        activePanel: 'contact', // chat

        width: 0,

      }
    },

    computed: {
      userList() {
        // todo: сортировки
        return this.users;
      },

      // список сообщений
      messages() {
        return (this.chatData.messageIndex[this.userId + '_' + this.contactId] || [])
          .map(id => this.chatData.messages[id]);
      }
    },

    methods: {
      isActive(panel) {
        return this.activePanel === panel ? 'active' : '';
      },

      onSetContact(contactId) {
        this.contactId = contactId;
      },

      onSetActivePanel(panel) {
        this.activePanel = panel;
      },

      onResize(event) {
        this.width = this.$refs[this.userId + 'messenger'].clientWidth;
      },

    },

    components: {
      MessengerPanel,
      MessengerContacts,
      MessengerChat,
    },

    mounted() {
      window.addEventListener('resize', this.onResize);
      this.onResize();

    },
    beforeDestroy() {
      window.removeEventListener('resize', this.onResize)
    }

  }
</script>

<style lang="scss" src="@/components/messenger/css/_messenger.scss"></style>
