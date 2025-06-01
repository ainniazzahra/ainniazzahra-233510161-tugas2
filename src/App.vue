<template>
  <div style="display: flex; height: 100vh;">
    <nav style="width: 250px; border-right: 1px solid #ccc; padding: 1rem;">
      <h2>Pertemuan 2 dan 3</h2>
      <ul>
        <li><router-link to="/DeclarativeRendering">Declarative Renderings</router-link></li>
        <li><router-link to="/AttributBinding">Attribute Binding</router-link></li>
        <li><router-link to="/FormBindings">Form Binding</router-link></li>
        <li><router-link to="/ConditionalRendering">Conditional Rendering</router-link></li>
        <li><router-link to="/ListRendering">List Rendering</router-link></li>
        <li><router-link to="/ComputedProperty">Computed Property</router-link></li>
        <li><router-link to="/LifecycleRefs">Lifecycle dan Template Refs</router-link></li>
        <li><router-link to="/watchers">Watchers</router-link></li>
      </ul>
    </nav>
    <main style="flex: 1; padding: 1rem;">
      <router-view />
    </main>
  </div>
</template>
<style scoped>
/* Layout utama */
div {
  display: flex;
  height: 100vh;
  font-family: 'Inter', sans-serif;
  background: linear-gradient(to bottom right, #e0f7fa, #ffffff);
  color: #0f172a;
}

/* Navigasi Samping */
nav {
  width: 260px;
  background: linear-gradient(to bottom, #0288d1, #26c6da);
  color: white;
  padding: 2rem 1.5rem;
  border-right: 1px solid #b2ebf2;
  box-shadow: 4px 0 12px rgba(0, 0, 0, 0.05);
  border-radius: 0 20px 20px 0;
}

nav h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #ffffff;
  border-bottom: 2px solid #ffffff88;
  padding-bottom: 0.5rem;
}

/* Daftar Menu */
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 1rem;
}

router-link {
  display: block;
  text-decoration: none;
  color: #e0f7fa;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.6rem 1rem;
  border-radius: 10px;
  transition: all 0.3s ease;
  font-weight: 500;
}

router-link:hover {
  background-color: #ffffff;
  color: #0288d1;
  transform: translateX(6px);
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
}

/* Konten Utama */
main {
  flex: 1;
  padding: 2rem 3rem;
  overflow-y: auto;
  background-color: #ffffff;
  border-radius: 20px 0 0 0;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.03);
}
</style>
