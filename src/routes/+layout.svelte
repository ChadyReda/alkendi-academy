<script lang="typescript">
  import "../app.css"
  import {page} from "$app/stores"
</script>

<main class="grid grid-rows-[auto-1fr-auto] h-screen">
    <nav class="py-6">
        <div class="flex items-center">
            <b class="px-6 text-green-500">News: </b>
            <!-- svelte-ignore a11y_distracting_elements -->
            <marquee>Al Kendi: discover new and creative buissness ideas with our students / starts - <span class="text-pink-600">January 15</span></marquee>
        </div>
        <div>
          <h1 class="text-center text-5xl font-extrabold py-3">BTS ALKENDI</h1>
        </div>
        <div role="tablist" class="tabs tabs-bordered max-w-[500px] mx-auto">
          <a href="/" role="tab" class="tab { $page.url.pathname === '/' ? 'tab-active' : '' }">Home</a>
          <a href="/events" role="tab" class="tab { $page.url.pathname === '/events' ? 'tab-active' : '' }">Events</a>
          <a href="/about" role="tab" class="tab { $page.url.pathname === '/about' ? 'tab-active' : '' }">About</a>
        </div>
    </nav>
    <slot></slot>
    <footer class="footer footer-center bg-base-200 text-base-content rounded p-10">
        <nav class="grid grid-flow-col gap-4">
          <a href="/about" class="link link-hover">About us</a>
          <a href="/" class="link link-hover">Contact</a>
          <a href="/events" class="link link-hover">Events</a>
          <a href="https://github.com/ChadyReda" class="link link-hover">Developer</a>
        </nav>
        <nav>
          <div class="grid grid-flow-col gap-4">
            <!-- svelte-ignore a11y_consider_explicit_label -->
            <a href="https://x.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="fill-current">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <!-- svelte-ignore a11y_consider_explicit_label -->
            <a href="http://youtube.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="fill-current">
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <!-- svelte-ignore a11y_consider_explicit_label -->
            <a href="http://facebook.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="fill-current">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by AL Kendi Academy</p>
        </aside>
    </footer>
</main>