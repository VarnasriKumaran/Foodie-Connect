import React from "react";
import './timeline.css';


export default function Timeline(){
    return (
        <div>
            <section id="timeline">

<div className="tl-item">
  

      <div className="tl-bg" style="background-image: url(https://www.wieland.com/assets/images/d/header_wieland_ny-1cdf09e4.jpg
)"></div>
  <div className="tl-year">
    <p className="f2 heading--sanSerif">2009</p>
  </div>

  <div className="tl-content">
    <h1 className="f3 text--accent ttu">Vestibulum laoreet lorem</h1>
    <p>Suspendisse potenti. Sed sollicitudin eros lorem, eget accumsan risus dictum id. Maecenas dignissim ipsum vel mi rutrum egestas. Donec mauris nibh, facilisis ut hendrerit vel, fringilla sed felis. Morbi sed nisl et arcu.</p>
  </div>

</div>

<div className="tl-item">
  
  <div className="tl-bg" style="background-image: url(https://www.wieland.com/assets/images/6/kachel_careers_spot-eeeb207b.jpg)">
    
  </div>
  
  <div className="tl-year">
    <p className="f2 heading--sanSerif">2010</p>
  </div>

  <div className="tl-content">
    <h1 className="f3 text--accent ttu">Phasellus mauris elit</h1>
    <p>Mauris cursus magna at libero lobortis tempor. Suspendisse potenti. Aliquam interdum vulputate neque sit amet varius. Maecenas ac pulvinar nisi. Fusce vitae nunc ultrices, tristique dolor at, porttitor dolor. Etiam id cursus arcu, in dapibus nibh. Pellentesque non porta leo. Nulla eros odio, egestas quis efficitur vel, pretium sed.</p>
  </div>

</div>
</section>
        </div>

    )
};