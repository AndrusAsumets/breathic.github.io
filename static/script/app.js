(async () => {
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const parseSection = waypoint =>
    waypoint.href.split('mailto:')[1].split('@way.point')[0];
  const updateWatch = (section) =>
    document.querySelector('.watch-content').style.backgroundImage = `url(/static/img/${section}.png)`;
  let sectionIndex = 0;
  let areWaypointsEnabled = false;

  while (!areWaypointsEnabled) {
    const waypoints = document.getElementsByTagName('a');

    if (!waypoints.length) {
      await sleep(100);
      continue;
    }

    areWaypointsEnabled = true;
    const sections = Array.prototype.map.call(waypoints, (waypoint) => parseSection(waypoint));
    updateWatch(sections[sectionIndex]);

    Array.prototype.forEach.call(waypoints, (waypoint) => {
      new Waypoint({
        element: waypoint,
        handler: () =>
          updateWatch(parseSection(waypoint))
      });
    });
  };
})();