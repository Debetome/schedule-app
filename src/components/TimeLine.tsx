// TimeLine.jsx
import React from 'react';
import "./TimeLine.css"

const TimeLine: React.FC = () => {
  return (
    <section className="timeline w-full h-full mt-12 rounded-lg">
    <ol className="justify-center h-full overflow-x-auto overflow-y-hidden">
      <li>
        <div>
          <time>1934</time> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos.
        </div>
      </li>
      <li>
        <div>
          <time>1937</time> Proin quam velit, efficitur vel neque vitae, rhoncus commodo mi. Suspendisse finibus mauris et bibendum molestie. Aenean ex augue, varius et pulvinar in, pretium non nisi.
        </div>
      </li>
      <li>
        <div>
          <time>1940</time> Proin iaculis, nibh eget efficitur varius, libero tellus porta dolor, at pulvinar tortor ex eget ligula. Integer eu dapibus arcu, sit amet sollicitudin eros.
        </div>
      </li>
      <li>
        <div>
          <time>1943</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
        </div>
      </li>
      <li>
        <div>
          <time>1946</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
        </div>
      </li>
      <li>
        <div>
          <time>1956</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
        </div>
      </li>
      <li>
        <div>
          <time>1957</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
        </div>
      </li>
      <li>
        <div>
          <time>1967</time> Aenean condimentum odio a bibendum rhoncus. Ut mauris felis, volutpat eget porta faucibus, euismod quis ante.
        </div>
      </li>
      <li>
        <div>
          <time>1977</time> Vestibulum porttitor lorem sed pharetra dignissim. Nulla maximus, dui a tristique iaculis, quam dolor convallis enim, non dignissim ligula ipsum a turpis.
        </div>
      </li>
      <li>
        <div>
          <time>1985</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
        </div>
      </li>
      <li>
        <div>
          <time>2000</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
        </div>
      </li>
      <li>
        <div>
          <time>2005</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
        </div>
      </li>
      <li></li>
    </ol>
  </section>
  );
};

export default TimeLine;
