const SolutionsModal = () => {
    return (
        <div className='solutions-modal'>
            <h2 id="solutions-header">
                From reusable rockets to lasers and nets, here are a few of the
                proposed solutions to deorbit or prevent future space junk.
            </h2>
            <a
                href="https://www.esa.int/Enabling_Support/Space_Engineering_Technology/Shaping_the_Future/Sail_solutions_for_space_junk"
                target="_blank"
                className="solutions-links"
            >Sails</a
            >
            <a
                href="https://www.esa.int/Safety_Security/Clean_Space/Want_to_snag_a_satellite_Try_a_net"
                target="_blank"
                className="solutions-links"
            >Nets</a
            >
            <a
                href="https://spectrum.ieee.org/laser-could-clear-space-junk-from-orbit"
                target="_blank"
                className="solutions-links"
            >Lasers</a
            >
            <a
                href="https://thehill.com/changing-america/resilience/smart-cities/561726-elon-musk-says-his-starship-can-chomp-up-space-junk"
                target="_blank"
                className="solutions-links"
            >SpaceX Starship</a
            >
            <a
                href="https://clearspace.today/"
                target="_blank"
                className="solutions-links"
            >ClearSpace-1 (Great Visuals)</a
            >
        </div>
    );
};

export default SolutionsModal;
