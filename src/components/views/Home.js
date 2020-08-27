import React from "react"

export const Home = () => (
  <>
    <div className="hero is-fullheight has-text-centered">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Todo List!</h1>
          <div className="flex flex--align-center flex--column">
            <button className="button is-primary my-2">Get Started</button>
            <button className="button is-small my-2">Login</button>
          </div>
        </div>
      </div>
    </div>

    <section className="px-4 py-4">
      <div className="container">
        <h2 className="title">About Todo List</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          quos illum, fugiat libero dicta debitis accusantium quo similique
          repudiandae, deserunt quas officiis veniam voluptatibus fugit ipsum
          quae dignissimos sed? Sed.
        </p>
      </div>
    </section>

    <div>
      <div className="divider">Let&apos;s Connect!</div>
    </div>

  </>
)
