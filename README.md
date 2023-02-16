<controller@way.point>
***Breathic*** is a fitness-focused Apple Watch app for endurance athletes (or more specifically for those looking to get a better understanding of their breath) that manages breathing cycles through heart or movement activity. It does that by measuring user's heartrate or steps, which is then followed by triggering audible or haptic events which will indicate when it will be a good time to either breathe in or breathe out again.

<rhythm@way.point>
After installing the app, take a look at `Controller` view where the `Source` tab toggle allows for basing your breathing cycles to be calculated either through hearbeats/s or steps/s. Both modes will work for running, though heartbeats will be more usable when doing either cycling, rowing, etc.

<status@way.point>
Next up, hit `Rhythm` tab, which will open a `Rhythm` view that you can use for changing frequency of breathing (either both in and out or just out when using the picker on the right). If you previously had chosen heartbeats as a source, then using rhythm of 1:1 when your heartbeat is on 1bps (or 60bpm) will mean it will do half a breathing cycle per second (or 30bpm). If you are to increase the rhythm to 2:2, then the breathing feedback will become slower by a factor of 2. If you start working out and your heartbeat goes from 60 to 120bpm, then apps breathing rate will also increase by a factor of 2.

Thirdly, start a session by hitting the `Session` button.
<log@way.point>
By default, haptic will be preselected for you under `Feedback` tab, but toggling the tab will let you choose between haptic and audio events.


If you chose audio, make sure the output device is set as connected under Apple Watch's *Settings -> Bluetooth*. In order to really make haptic events vibrant on your watch, go to *Settings -> Sounds & Haptics* and drag `ALERT VOLUME` all the way down to 0, and then check *Prominent* under `HAPTICS` tab to increase the level of vibrations.

If you previously chose heartbeats from the `Source` tab (or steps and have since begun to walk), and are now wearing the watch on your hand, then it should be giving you haptic or audible feedback. If you pan the `Controller` view to left, you will see `Status` view on the right with all the relevant metrics.

After finishing a session, hit the `Session` button again for either *saving* or *discarding* session metrics. Saved sessions with relevant overview data as well as a graph will appear under `Log` view that you can select from the burger menu.

If for some reason you made a mistake of not approving access for heartrate and/or location derived speed the first time, then you should be able to correct it by reinstalling the app once again.

