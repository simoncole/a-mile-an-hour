import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <div className={styles.mainWrapper}>
        <h2 id="i-ran-a-marathon-and-built-a-website-at-the-same-time">I ran a marathon... and built a website at the same time</h2>
        <p>&quot;If you can fill the unforgiving minute with 60 seconds worth of distance run, yours is the Earth and everything that&#39;s in it&quot; - Rudyard Kipling, <em>If</em></p>
        <br/>
        <p>I ran a mile an hour, for 24 hours. However, the running wasn&#39;t the point. I wanted to see how much I could accomplish in a day, and by doing so reinvent to myself what I&#39;m capable of during a 24 hour period (This also ended up not really being the point but more to come). I&#39;ve been wanting to do something like this ever since I stumbled upon Beau Miles&#39; channel on YouTube and ultimately read his book, The Backyard Adventurer (which I highly recommend). One of the things Beau really inspired in me is running&#39;s capacity as a means of adventure. As a college cross country runner, I largely thought of running as a competitive endeavor. It was something that I sunk all this time and effort into so I could improve and ultimately beat the person next to me or drop down a time by a few seconds. I&#39;ve come to see this as a superficial and frankly one-dimensional view of what running can be in my life. Among other things, it can introduce me to a host of adventurous oddities and self-exploration. This is my adventure tale.</p>
        <br/>

        <h4 id="8-pm">10 am</h4>
        <p> I wake up after one of the most fragmented nights of sleep I can recall. When I get  excited about something I tend to get a little obsessed. I&#39;ll often go to bed repeating details of whatever I&#39;m working on over and over whilst I&#39;m sleeping. It happens a lot when I start a new programming project, I&#39;ll find myself waking up at some ungodly hour deep into the night in a cold sweat murmuring about some incoherent JavaScript code. This past night I was kept awake thinking about just how strange and exciting the next 24 hours of my life will be.   </p>
        <br/>

        <h4 id="8-pm">11 am</h4>
        <p>I start running. For whatever reason, possibly because I want to make myself suffer, I decided to attempt this adventure during the peak of the Florida summer in the blazing heat and oppressive humidity (humidity regularly reaches &gt;100% where I live in the rural Florida Panhandle). After spending all summer in Philly for an internship, I had definitively lost my swamp acclimation. I decided to run 3 miles the first hour, and 0.219 the last, so that the total distance would sum to the famed 26.219 miles between Athens and Marathon. The first 3 felt surprisingly long and I was already drenched with sweat, but my morale was high. There was some initial apprehension before starting, but as soon as I dove in I couldn&#39;t be any happier. I came back and immediately started getting my project set up. I had a small plan in my head of what I wanted to do, but I really wanted to allow myself to improvise throughout the day. I had lots of ideas, but ultimately the website I decided to build was an app where you could enter a Strava activity you completed and my site would use the GPT API to generate a story from the data about that activity. If you don&#39;t know what Strava is, it&#39;s basically social media for runners and cyclists where your posts are data about runs or bike rides you go on. You can title these and add things like pictures and descriptions to them. I wanted to take all this data that you generate about your run and feed it into the magic that is ChatGPT to create a story about my run. It&#39;s a pretty pointless and honestly silly website but that&#39;s actually what I wanted because it matched the sentiment of the whole 24 hours. To quote the Beau Miles, &quot;There&#39;s kind of no point but there&#39;s lots of point to it as well&quot;.        </p>
        <br/>

        

        <div className={styles.imageWrapper}>
          <div className={styles.verticalFlexWrapper}>
            <div>
              <h4 id="2-pm">2 pm</h4>
              <p>The code is coming along well. I feel a level of focus I&#39;ve only ever experienced during those times when I realize an essay is due at midnight and it&#39;s now 11pm. This is exactly what I&#39;ve been seeking with my little experiment, deep focus and becoming lost in my craft. I&#39;m starting to understand the genius behind the structure of what I&#39;m doing. I come back from a short run, energized and motivated, I inevitably encounter some challenge in what I&#39;m working on and after struggling with it for a while my motivation starts to wane. All of a sudden, it&#39;s time for me to run again and the cycle repeats. The distance of 1 mile is perfect in that it&#39;s just far enough that you can really clear your head and get stuck into the run, but it&#39;s just short enough such that it doesn&#39;t fatigue the body. </p>
              <br />
            </div>

            <div>
              <h4 id="4-pm">4 pm</h4>
              <p> I eat a delicious lunch, my first real break of the day that wasn&#39;t running a mile in my neighborhood. </p>
            </div>
          </div>
          <Image 
          src={"/lunch.jpeg"}
          alt="Lunch"
          height={400}
          width={300}
          />
        </div>
        <br/>

        <h4 id="8-pm">6 pm</h4>
        <p>At this point I feel like I&#39;ve been at this a long time, then I realize it&#39;s been 7 hours and I&#39;m not even a third of the way done. I remember thinking to myself &quot;I can&#39;t believe just how long 24 hours is.&quot; This realization ended up being pretty profound for me. As humans, we create routines and tasks to fill our day. By chopping up our responsibilities into different slices of time we tend to lose track of the day as a whole. This became evident to me when I considered just how short the ~53 minutes between runs felt and just how long the entire period of 24 hours was beginning to feel. This realization has been nothing short of liberating in that it allowed me to take more of a bird&#39;s eye view on life when I need to but still fall into the normal task, reset, task, reset loop we all experience. </p>
        <br/>

        <h4 id="8-pm">8 pm</h4>
        <p> I eat a big dinner of Ropa Vieja with my parents before fighting through some of the worst stomach cramps of my life on my next mile. </p>
        <br/>

        <div className={styles.imageWrapper}>
          <div className={styles.verticalFlexWrapper}>
            <div>
              <h4 id="8-pm">10 pm</h4>
              <p> The night brings a very welcome drop in temperature. I&#39;m beginning to notice a pattern during my runs where I&#39;ll start out nice and slow and naturally progress to a faster pace. I&#39;m not sure if the drop in pace is just due to the stiffness in my legs clearing up or if I&#39;m just that eager to get back to coding. I wrote down in my notes that the runs now are feeling significantly easier than when I started 11 hours ago.   </p>
              <br/>
            </div>
            <div>
              <h4 id="8-pm">12 am</h4>
              <p>As the calendar shifts to a new day, I&#39;ve finally made it past the halfway mark. The next few hours to come were undoubtedly the peak of my mood and my experience. I also had some of the best tasting coffee of my life. </p>
            </div>
          </div>
          <Image
          src={"/coffee.jpeg"}
          alt="Coffee"
          height={400}
          width={300}
          />
          <br/>
        </div>

        <h4 id="8-pm">1 am</h4>
        <p>My head is craned upwards because I can&#39;t take my eyes off the stars and the moon glowing as my only light source. The feeling of running in what is practically pitch black is exhilarating beyond description. I feel like I&#39;m gliding down the road in total awe of the cosmos above me. It&#39;s around this time that I think about the juxtaposition of running and coding. When I&#39;m coding I&#39;m entirely absorbed into the digital world, thinking logically and relentlessly solving little puzzles one after another. When I&#39;m out running my mind roams free. I&#39;m able to think creatively or often just not think about anything particular at all. Crucially though, I&#39;m able to internalize the beauty and the power of Mother Nature. I&#39;m reminded of my dad&#39;s favorite short story by Ernest Hemingway, Big Two Hearted River.</p>
        <br/>

        <h4 id="3-am">3 am</h4>
        <p> After being stuck on the same small problem in my code for the past few hours and growing increasingly frustrated and tired I finally resolve the error. I won&#39;t go into details here because I&#39;m trying to keep this article non-technical but this is really one of the things I love most about programming. The feeling of being hung up on something for so long and finally overcoming it is a feeling like no other. I won&#39;t lie when I finally overcame the error in my sleep deprived state I stood up and threw my hands in the air like I was Rocky at the top of the art museum steps.    </p>
        <br/>

        <h4 id="5-am">5 am</h4>
        <p> At this point in the night the chemical milieu of caffeine, adrenaline, runner&#39;s high, and programmer&#39;s high that was keeping my brain alert was about to give way to the monstrous buildup of adenosine screaming at me to sleep. The website being in a semi-functional state allowed me to rationalize taking a 45 minute rest before 6 am. </p>
        <br/>

        <h4 id="8-pm">6 am</h4>
        <p>Dead tired: mentally, physically, and emotionally this is the time at which the seemingly inevitable thought of &quot;Simon, what the hell is the point of this?&quot; came up. In that moment, I wanted nothing more than to crawl into bed and sleep like the dead. I think to myself &quot;Seriously, why am I abusing my body like this?&quot; I think the idea of giving up felt so enticing at the time because on the surface what I was doing looked so pointless and superficial, but when I think about it now, I know it&#39;s not. In the last 19 hours I felt nervousness, focus, wonder, elation, and now fatigue. All to extremes I practically never get to during normal life. By throwing myself into this most novel and uncomfortable situation, I&#39;m able to experience something profoundly unique, and the best part was I didn&#39;t have to travel to Nepal to climb Everest, or train like an animal for 20 years to compete in the olympics. In fact, I never went more than half a mile away from my house and I did almost no preparation. So that&#39;s the point. 
        &quot;I wanna feel it all, joy, pain and the sky&quot; -Zach Bryan </p>
        <br/>

        <h4 id="7-am">7 am</h4>
        <p>I keep running. </p>
        <br/>

        <h4 id="8-am">8 am</h4>
        <p>The sun comes up and things feel significantly better but I&#39;m still left with a grumpy disposition and the temptation of stopping.</p>
        <br/>

        <h4 id="10-am">10 am</h4>
        <p>Here, I hit 26 miles. A couple hours ago I think I told my parents I was just going to stop at 10 am because I was so tired and that would put me at 26 miles which is close enough to a marathon right? Wrong. A marathon is 26.219 mile. I didn&#39;t go through all this to fudge the numbers and not actually finish.     </p>
        <br/>

        <h4 id="11-am">11 am</h4>
        <p>I finish my marathon. </p> 
      </div>

    </main>
  )
}
