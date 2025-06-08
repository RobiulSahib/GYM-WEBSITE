import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Join our top-rated workout sessions designed to boost your strength, endurance,
          and overall fitness. Whether you're a beginner or a seasoned athlete,
          our expert trainers will guide you every step of the way.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>

      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Discover our featured bootcamps, focused on high-intensity training, fat loss,
          and body transformation. These group sessions are perfect for pushing limits
          and staying motivated.
        </p>

        <div className="bootcamps">
          <div>
            <h4>Full Body Conditioning</h4>
            <p>
              A high-intensity bootcamp that targets every major muscle group to
              improve strength, mobility, and stamina. Great for burning calories fast!
            </p>
          </div>

          <div>
            <h4>HIIT Blast</h4>
            <p>
              Push your cardiovascular limits with our High Intensity Interval Training.
              Quick bursts of energy followed by recovery, ideal for fat loss and endurance.
            </p>
          </div>

          <div>
            <h4>Strength & Power Bootcamp</h4>
            <p>
              Build muscle and increase your power with this strength-focused bootcamp
              that blends weight training and core workouts for maximum results.
            </p>
          </div>

          <div>
            <h4>Early Morning Energizer</h4>
            <p>
              Kickstart your day with a dynamic morning bootcamp that boosts energy,
              improves flexibility, and sets a healthy tone for the rest of the day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
