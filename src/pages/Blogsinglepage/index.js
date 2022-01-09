import React from 'react'
import classes from './blogsinglepage.module.scss';

function BlogSinglePage() {
    return (
        <>
            <section className={classes.blog__container}>
                <div className={classes.blog__container__title}>
                    <p className={classes.blog__container__title__release__date}>
                        Published January 25, 2021
                    </p>
                    <h1 className={classes.blog__container__title__h2}>
                        10 secret tips for managing a remote team
                    </h1>
                </div>

                <div className={classes.blog__container__image}>
                    <img src="liveinteraction.jpg" />
                </div>

                <div className={classes.blog__container__description}>
                    <p>
                    Last year, our teams at WhereBy.Us went fully remote. Our team was already distributed across the U.S., and we chose to formalize this as an operational way to ensure that “solo” employees working alone in various cities had the same habits and access as those who gathered IRL. It also saved us cash, the lifeblood of any startup.
                    Building a truly remote culture takes time. We haven’t mastered it yet, and we probably never will. Every change in personnel and every change in operations is also a culture change. Company culture is constantly evolving, with or without us managers, and staying engaged with those changes is one of our biggest leadership responsibilities.
                    It’s true that working IRL has advantages. Colocated teams have more “creative collisions” through hallway chatter or quick coffee breaks. You can tolerate less discipline about documentation because there’s someone nearby who can help folks through an unfamiliar tool or process and face-to-face interruption feels less disruptive to us non-robots. Urgent problems are solved more quickly. Non-urgent issues stay non-urgent for longer.
                    But, for managers, working together in physical space also means what’s really happening at your company may be less obvious. Gaps are more easily swept out of sight. Work on both operations and culture is less effortful. Remote work, for all of its challenges, can force you and your company to become more intentional, more thoughtful, and more resilient to the challenges of change.
                    Adopting remote work under duress and during a global health crisis is an especially difficult task. For the past week or so, my DMs and email have been filled with requests for help from those who must rapidly upend their team’s entire way of working together to protect the safety and health of their people. Here are some practical habits that we’ve learned that your company could adapt quickly to ease the disruption.
                    </p>
                    <p>
                    Last year, our teams at WhereBy.Us went fully remote. Our team was already distributed across the U.S., and we chose to formalize this as an operational way to ensure that “solo” employees working alone in various cities had the same habits and access as those who gathered IRL. It also saved us cash, the lifeblood of any startup.
                    Building a truly remote culture takes time. We haven’t mastered it yet, and we probably never will. Every change in personnel and every change in operations is also a culture change. Company culture is constantly evolving, with or without us managers, and staying engaged with those changes is one of our biggest leadership responsibilities.
                    It’s true that working IRL has advantages. Colocated teams have more “creative collisions” through hallway chatter or quick coffee breaks. You can tolerate less discipline about documentation because there’s someone nearby who can help folks through an unfamiliar tool or process and face-to-face interruption feels less disruptive to us non-robots. Urgent problems are solved more quickly. Non-urgent issues stay non-urgent for longer.
                    But, for managers, working together in physical space also means what’s really happening at your company may be less obvious. Gaps are more easily swept out of sight. Work on both operations and culture is less effortful. Remote work, for all of its challenges, can force you and your company to become more intentional, more thoughtful, and more resilient to the challenges of change.
                    Adopting remote work under duress and during a global health crisis is an especially difficult task. For the past week or so, my DMs and email have been filled with requests for help from those who must rapidly upend their team’s entire way of working together to protect the safety and health of their people. Here are some practical habits that we’ve learned that your company could adapt quickly to ease the disruption.
                    </p>
                    <p>
                    Last year, our teams at WhereBy.Us went fully remote. Our team was already distributed across the U.S., and we chose to formalize this as an operational way to ensure that “solo” employees working alone in various cities had the same habits and access as those who gathered IRL. It also saved us cash, the lifeblood of any startup.
                    Building a truly remote culture takes time. We haven’t mastered it yet, and we probably never will. Every change in personnel and every change in operations is also a culture change. Company culture is constantly evolving, with or without us managers, and staying engaged with those changes is one of our biggest leadership responsibilities.
                    It’s true that working IRL has advantages. Colocated teams have more “creative collisions” through hallway chatter or quick coffee breaks. You can tolerate less discipline about documentation because there’s someone nearby who can help folks through an unfamiliar tool or process and face-to-face interruption feels less disruptive to us non-robots. Urgent problems are solved more quickly. Non-urgent issues stay non-urgent for longer.
                    But, for managers, working together in physical space also means what’s really happening at your company may be less obvious. Gaps are more easily swept out of sight. Work on both operations and culture is less effortful. Remote work, for all of its challenges, can force you and your company to become more intentional, more thoughtful, and more resilient to the challenges of change.
                    Adopting remote work under duress and during a global health crisis is an especially difficult task. For the past week or so, my DMs and email have been filled with requests for help from those who must rapidly upend their team’s entire way of working together to protect the safety and health of their people. Here are some practical habits that we’ve learned that your company could adapt quickly to ease the disruption.
                    </p>
                    <div className={classes.blog__container__description__author}>
                        <div className={classes.blog__container__description__author__img}>
                            <img src="logo.png" />
                        </div>
                        <div className={classes.blog__container__description__author__details}>
                            <p>Written by</p>
                            <p className={classes.blog__container__description__author__details__name}>Coursly Nepal</p>
                            <p>Admin</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogSinglePage
