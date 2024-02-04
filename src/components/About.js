import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="about-section" id="about-section">
        <div className="about-header">
          <h3 className="h-color">Website Infomation:</h3>
        </div>
        <div className="about-container">
          <div className="about-card">
            <div>
              <h4 className="h-color">⚡ Founder Team</h4>
              <p className="p-color">
                Find out about us through here and little information of who we are.
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">✉️ 24/7 Support</h4>
              <p className="p-color">
                Supporting members who joins our Dc Server and Plays with us on ERLC!
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">✏️ ERLC Server</h4>
              <p className="p-color">
                We are a completely a ERLC Server dedicating to recieve Good Roleplays, Active SSUs and Much More!
              </p>
              <hr />
            </div>
          </div>
        </div>
        <p>
          <Link href="/team" className="h-color no-decoration">
            Check out Founders Team &rarr;
          </Link>
        </p>

        <section className="about-stats">
          <div className="about-stats-card">
            <h4 className="h-color">17k+</h4>
            <p className="p-color">Total Servers</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">94k+</h4>
            <p className="p-color">Total Users</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">375k+</h4>
            <p className="p-color">Total Commands Ran</p>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
