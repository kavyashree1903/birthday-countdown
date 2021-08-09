import "./styles.css";
import { useState } from "react";
import useInterval from "./useInterval";
import { countdown } from "./utils";

const DATE = "August 18, 2021 00:00:00";

export default function App() {
  const [state, setState] = useState(() => countdown(DATE));
  const [open, setOpen] = useState(false);
  const { textDay, textHour, textMinute, textSecond } = state;
  useInterval(() => setState(countdown(DATE)), 1000);
  const onOpenModal = () => {
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
  };
  return (
    <section className="coming-soon">
      <h2>
        I am excited already
        <span role="img" aria-label="salut">
          🎉
        </span>
        <span role="img" aria-label="salut-2">
          🎊
        </span>
        <span role="img" aria-label="cake">
          🎂
        </span>
      </h2>
      <div className="countdown">
        <div className="container-day">
          <h3 class="day">Days</h3>
          <h4 className="time-value">{textDay}</h4>
        </div>
        <div className="container-hour">
          <h3 class="hour">Hours</h3>
          <h4 className="time-value">{textHour}</h4>
        </div>
        <div className="container-minute">
          <h3 class="minute">Mins</h3>
          <h4 className="time-value">{textMinute}</h4>
        </div>
        <div className="container-second">
          <h3 class="second">Secs</h3>
          <h4 className="time-value">{textSecond}</h4>
        </div>
      </div>
      <div className="button" onClick={onOpenModal}>
        Click me 😋
      </div>
      {open ? (
        <div className="letter">
          <div onClick={onCloseModal} className="close-btn">
            Close me😚
          </div>
          <h2>I love you❤️</h2>
          <div className="feelings">
            Hi baby you mean the world to me and my world's turning 20 in just
            some time. You know na how much I love you (not 🤌🏾). I am already
            super super excited to celebrate it and we will make it super
            special for you okay? I just think about you full time and I miss
            you so much (it keeps getting more and more everyday). But I know
            that all this wait will be worth it when we meet. I wish I could be
            with you in person to celebrate this special day, but I promise that
            I will make up for it with extra special celebrations when we’re
            next together!💥 You know it so difficult seeing other couples
            meeting and we on the other hand are apart from each other for such
            a long time. But I don’t regret a thing. I would rather have you far
            away than not at all. I’m really lucky to have you in my life.
            Here's to my world turning 20 years old! 🥳
          </div>
        </div>
      ) : null}

      {/* <img
        className="waiting"
        src="./cake.svg"
        alt="woman is waiting near calendar"
      /> */}
    </section>
  );
}
