<template>
  <div class="toolbar">
    <div class="toolbar-left">
      <img src="../../assets/img/lywlogo.png" alt="Logo" class="logo" />
      <span class="brand-text">Lead Your Way</span>
    </div>
    <div class="toolbar-middle">
      <p class="menu-options">
        <span>Home</span> | <span>About</span> | <span>Contact</span> |
        <span><router-link to="/search">Search</router-link></span>
      </p>
    </div>
    <div class="toolbar-right">
      <p>
        <a href="/login"><button class="login-button">Login</button></a>
        <a href="/signup"><button class="signup-button">Sign up</button></a>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader',
};
</script>

<style scoped>
router-link {
  text-decoration: none;
  color: black;
}
.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /*background-color: #f0f0f0;*/
  padding: 10px;
}

.toolbar-left {
  display: flex;
  align-items: center;
  margin-left: 50px;
}

.logo {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.brand-text {
  font-weight: bold;
  font-size: 20px;
}

.toolbar-middle {
  flex-grow: 1;
  text-align: center;
}

.menu-options span {
  margin: 0 5px;
  /*font-weight: bold;*/
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
}

.menu-options span:hover {
  color: #f97316;
  transition: 0.1s;
}

.toolbar-right {
  text-align: right;
  margin-right: 50px;
}

.login-button,
.signup-button {
  margin-left: 15px;
  text-transform: uppercase;
  font-weight: 100;
  font-size: 14px;
  cursor: pointer;
  padding: 7px 25px;
  border: 1px solid #f97316;
  border-radius: 2px;
}

.login-button {
  background-color: white;
  border-color: #f97316;
}
.signup-button {
  background-color: #f97316;
  color: white;
}

/*
.login-button:hover {
  transform: scale(1.1);
  transition: transform 0.2s;
}

.signup-button:hover {
  transform: scale(1.1);
  transition: transform 0.2s;
}*/

/* Estilos para dispositivos móviles */
@media (max-width: 480px) {
  .toolbar {
    padding: 10px;
    /*flex-direction: column;*/
  }

  .toolbar-left {
    margin-left: 0;
  }

  .toolbar-right {
    flex-direction: column;
    align-items: flex-end;
    align-items: center;
  }

  .login-button,
  .signup-button {
    margin: 0;
    margin-top: 10px;
  }
}
</style>
