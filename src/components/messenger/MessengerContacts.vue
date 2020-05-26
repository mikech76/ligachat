<template>
  <div class="messenger-contacts" :class="activePanel">
    <ul class="messenger-contacts__list">

      <li v-for="user in users"
          :key="user.id"
          class="messenger-contacts__item"
          :class=" user.id === contactId ? 'selected' : '' "
          @click="$emit('onSetContact', user.id )"
      >
        <Avatar :url="user.url"></Avatar>
        <span class="title">
          {{userId ===  user.id ? 'Избранное' :  user.name }}
        </span>
      </li>


    </ul>
  </div>
  <!-- /.contact-list -->
</template>

<script>
  import Avatar from '@/components/messenger/Avatar.vue'

  export default {
    name: 'MessengerContacts',

    props: {

      users:     Object, // все юзеры
      userId:    String, // владелец чата
      contactId: String, // респондент

      activePanel: {
        type:    String,
        default: 'contact',
      },
    },

    data() {
      return {}
    },

    components: {
      Avatar,
    },
  }
</script>


<style lang="scss" src="@/components/messenger/css/_messenger-contacts.scss"></style>
