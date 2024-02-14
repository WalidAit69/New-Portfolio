import React from 'react';
import particles1 from "../assets/simpleparticle1.svg";
import particles2 from "../assets/simpleparticle2.svg";

function Skills() {
    return (
        <div className='section2'>
            <div className='skills container'>
                <article className="left-skills">
                    <h1>Design</h1>
                    <p>I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me (~_^). I'm committed to creating fluent user experiences while staying fashionable.</p>
                    <img src={particles2} />
                </article>

                <article className="right-skills">
                    <div>
                        <h1>Engineering</h1>
                        <p>In building JavaScript applications, I'm equipped with just the right tools, and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale — performance and scalabilty are priorities on my radar.</p>
                    </div>
                    <img src={particles1} />
                </article>
            </div>
        </div>
    )
}

export default Skills