<script>
  import { userInfo } from "../../store/userStore";
  import { updateUserSetting } from '../../services/update-user-setting';

  function handleSubmit(e) {
    const target = e.target
    updateUserSetting({
      email: target.email.value,
      username: target.username.value,
      bio: target.bio.value,
      image: target.image.value,
      token: $userInfo.token
    })
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <fieldset>
    <fieldset class="form-group">
      <input
        class="form-control"
        type="text"
        name="image"
        placeholder="URL of profile picture"
      />
    </fieldset>
    <fieldset class="form-group">
      <input
        class="form-control form-control-lg"
        value={$userInfo.username}
        type="text"
        name="username"
        placeholder="Your Name"
      />
    </fieldset>
    <fieldset class="form-group">
      <textarea
        class="form-control form-control-lg"
        rows="8"
        value={$userInfo.bio}
        name="bio"
        placeholder="Short bio about you"
      />
    </fieldset>
    <fieldset class="form-group">
      <input
        class="form-control form-control-lg"
        type="text"
        value={$userInfo.email}
        name="email"
        placeholder="Email"
      />
    </fieldset>
    <fieldset class="form-group">
      <input
        class="form-control form-control-lg"
        type="password"
        name="password"
        placeholder="Password"
      />
    </fieldset>
    <button class="btn btn-lg btn-primary pull-xs-right">
      Update Settings
    </button>
  </fieldset>
</form>
