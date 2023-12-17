const AboutModal = () => {
    return (
        <div className='about-modal'>
            {/* purpose */}
            <h3 className="about-header">Purpose</h3>
            <h4 className="about-quote">
                "Science literacy is inoculation against those who are full of **it."
                - Neil deGrasse Tyson
            </h4>
            <div className="about-purpose">
                As a long time space exploration enthusiast, I wanted to visualize the
                amount of space debris we have orbiting Earth. With each additional
                piece of junk we leave to clutter space, the launch windows for future
                space missions decrease ever so slightly until the possibility of any
                space travel completely vanishes.
            </div>
            {/* directions */}
            <h3 className="about-header">Directions</h3>
            <ul className="about-list">
                <li className="about-list-li">
                    Hover over a satellite to display its name and NORAD (Sattellite
                    Id).
                </li>
                <li className="about-list-li">
                    Click on a satellite to mount and dismount the information box.
                </li>
                <li className="about-list-li">
                    Clicking 'Read More' will take you to that satellites page on NY2O
                    which contains an abundance of live data.
                </li>
                <li className="about-list-li">
                    Initially there will be 100 satellites rendering. Click on 'Get
                    More' to fetch 100 more. There are over 34,000 pieces of space
                    debris, so go as far as your computer will let you! 2,000 is a good
                    max :&#41;
                </li>
                <li className="about-list-li">
                    If loading all those satellites become to much for your computer,
                    click 'Reset To 100' to go back to 100 satellites.
                </li>
                <li className="about-list-li">
                    <div className="death-star">Seeing a weird death star shape?</div>
                    <div className="death-star-shape">
                        <h4 className="star-shape-header">Yes</h4>
                        <h4 className="star-shape">
                            Well due to astronomical differences in eliptical orbits, some
                            calculations are needed to render potentially 34,000 satellites
                            in view
                        </h4>
                    </div>
                    <div className="death-star-shape">
                        <h4 className="star-shape-header">No</h4>
                        <h4 className="star-shape">
                            Get to 1000+ satellites and check again
                        </h4>
                    </div>
                </li>
            </ul>
            {/* sources */}
            <div className="about-header">Sources</div>
            <ul className="about-list">
                <li className="about-list-li">
                    I used <a href="https://api.nasa.gov/#browseAPI" target="_blank">NASA's TLE API</a> who's data is provided by <a href="https://celestrak.com/" target="_blank">CelesTrack</a>
                </li>
                <li className="about-list-li"><a href="https://www.n2yo.com" target="_blank">NY2O</a> is used for additional information about any given satellite</li>
            </ul>
        </div>
    );
};

export default AboutModal;
