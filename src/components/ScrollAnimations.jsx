import { useScroll ,motion, useSpring, useTransform} from 'framer-motion'
import React from 'react'

const ScrollAnimations = () => {

    const {scrollYProgress} = useScroll()
    const scaleX = useSpring(scrollYProgress)

    const background = useTransform(scrollYProgress,
        [0, 0.25, 1],
        ["rgb(251, 0, 0)", "rgb(0, 251, 0)", "rgb(0,0, 251)"]
    )

  return (
    <div>
        <motion.div
            className='origin-left sticky top-0 w-full h-[20px]'
            // style={{scaleX: scrollYProgress}}
            style={{scaleX, background}}
        >

        </motion.div>

        <div className=' max-w-[700px]  m-auto p-5'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam modi vero voluptatem quo at, assumenda, aperiam ipsam, laboriosam atque sunt cum beatae error recusandae officiis provident illum amet ipsum? Dolorum.
        Accusantium, atque nostrum odit explicabo quas, in labore libero nesciunt, alias sapiente cupiditate. Ullam aliquid incidunt quidem neque rem voluptatibus unde praesentium quibusdam, repellat tempora! Officia quod labore tempora exercitationem.
        Quod at excepturi est delectus tempore pariatur laborum sed rerum neque perferendis dicta natus assumenda laudantium velit veritatis explicabo nam facere, temporibus numquam inventore dolor, placeat quibusdam esse. Voluptates, fuga?
        Vero qui voluptatum suscipit dolorem voluptatibus repellat quibusdam asperiores dolores facilis deleniti voluptatem fugiat, cum rerum nam consectetur doloremque reprehenderit minima. Molestiae eveniet ea dicta! Ducimus odio a dolorum recusandae.
        Accusantium iste nam unde ipsam. Nobis, optio repellendus! Aperiam dolorum, earum accusantium, qui deserunt laudantium nemo amet corrupti tempore facilis quidem? Expedita ad earum dicta, quisquam assumenda soluta sint in!
        Cupiditate accusantium, fugiat, eaque impedit est voluptatum minus numquam vitae accusamus ab aspernatur neque tenetur incidunt quos commodi amet. Eos, soluta at? Perspiciatis vel laborum amet nobis necessitatibus iusto nulla?elit. Odit officiis necessitatibus repudiandae voluptatum sapiente, commodi, facilis itaque hic ratione assumenda, porro numquam doloribus aliquid dicta aspernatur laudantium reiciendis consequatur ipsa!0</p>
        
        <p>Lorem ipsum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos unde, a laudantium temporibus enim expedita assumenda repellendus inventore, iste alias distinctio fuga impedit sint cum tempora, illum voluptate nostrum ex? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur qui ab illo praesentium est dicta pariatur laboriosam maxime quos doloribus cumque, dignissimos repellat at non? Earum vel nemo corrupti rerum?
        Praesentium neque provident nostrum perspiciatis qui, omnis recusandae amet consequatur necessitatibus harum voluptates exercitationem eveniet veniam expedita error numquam animi. Perspiciatis delectus vero odit, consectetur quia aut corrupti. Tempora, ratione.
        Magni est veniam sit, laudantium voluptatibus impedit cupiditate saepe ullam dolor commodi aliquid velit tempora dicta ipsam eos asperiores odio dolorem unde, cumque quasi id consequuntur labore recusandae! Tenetur, voluptatibus!
        Similique inventore explicabo laudantium vitae ducimus itaque sit dolor asperiores. Impedit eum consequatur explicabo nobis ea incidunt fugit quam quos dignissimos esse molestiae dolores voluptatum, minus eos ullam minima eveniet?
        Vel, illum. Et alias cumque necessitatibus nemo itaque quia tenetur aperiam blanditiis nostrum doloremque, quo, pariatur id provident temporibus obcaecati placeat iure, explicabo suscipit doloribus laudantium commodi atque voluptate! Tempore! dolor sit amet consectetur adipisicing elit. Odit officiis necessitatibus repudiandae voluptatum sapiente, commodi, facilis itaque hic ratione assumenda, porro numquam doloribus aliquid dicta aspernatur laudantium reiciendis consequatur ipsa!0</p>
        <p>Lorem ipsum, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum voluptates necessitatibus est eos quo esse nobis praesentium odit optio? Fugiat magnam, quae repellendus dolorem ut quis facilis esse inventore quaerat?
        Fuga iure delectus autem dignissimos veritatis, velit enim officia non earum recusandae sint omnis necessitatibus maiores. Sapiente rem quia nihil quidem sit, distinctio dignissimos ipsam, architecto eos soluta quo voluptatem!
        Doloribus quaerat debitis esse quisquam atque voluptatum quidem quam quo ut, rem nihil explicabo mollitia delectus, vero minus non cumque architecto. Reiciendis incidunt repudiandae fuga excepturi, est dolorem nam laboriosam?
        Aut quidem quod dolorem nulla eius harum, aperiam ullam voluptate veritatis minus unde tenetur debitis dicta nihil est possimus amet facilis pariatur at ipsum in accusamus animi incidunt vero. Ex?
        Cupiditate minus aspernatur consectetur nisi, eaque fugit delectus mollitia itaque illo eos recusandae, magnam tempora! Distinctio fugit accusamus nihil, neque delectus illum laboriosam earum nostrum ut ex explicabo voluptates vel!
        Quam nostrum velit, ab deleniti dolores sequi eum saepe asperiores animi fuga itaque similique beatae vero, doloremque iste mollitia quo! Accusamus, harum! Deserunt facilis corporis, est quibusdam fuga amet magni?
        Numquam blanditiis itaque quo odio eveniet veritatis cum quos error, maxime dolorum impedit nemo totam nesciunt assumenda illum similique a! Officia, adipisci accusantium. Alias veritatis minus saepe laborum quidem expedita.
        Doloremque quo id dolor ipsum consectetur, laboriosam eveniet veritatis veniam ea sed architecto ducimus aliquid unde? Labore, laborum. Dignissimos dolor quod dolores pariatur. Laudantium explicabo nobis quasi nulla est illum!
        Vitae deserunt facere dicta. Est asperiores, quo aspernatur odio nihil aperiam. Possimus facere quaerat impedit, earum aut aspernatur a natus ea dolore mollitia corrupti reprehenderit nam consequatur deserunt architecto ipsum. dolor sit amet consectetur adipisicing elit. Odit officiis necessitatibus repudiandae voluptatum sapiente, commodi, facilis itaque hic ratione assumenda, porro numquam doloribus aliquid dicta aspernatur laudantium reiciendis consequatur ipsa!0</p>
        <p>Lorem ipsum, Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dicta est asperiores doloremque veniam aut, aliquam facere natus error reiciendis repudiandae obcaecati, quod vero iste optio. Vel atque aut velit?
        Doloribus id, non debitis maiores omnis doloremque eos consequatur est blanditiis, officia fugit numquam perspiciatis autem reiciendis illo quasi? Delectus, suscipit? Distinctio temporibus error nostrum ut quidem eaque cum odit?
        Vitae consequuntur et facere pariatur, esse nam obcaecati. Doloremque, cumque rem hic voluptas, accusantium amet quod eligendi unde nemo numquam quis quos? Laborum modi repellendus fuga sed similique ipsa ea.dolor sit amet consectetur adipisicing elit. Odit officiis necessitatibus repudiandae voluptatum sapiente, commodi, facilis itaque hic ratione assumenda, porro numquam doloribus aliquid dicta aspernatur laudantium reiciendis consequatur ipsa!0</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab, ipsam ullam doloribus nobis earum deleniti excepturi quisquam nesciunt nostrum dolor consequuntur amet ad libero totam natus. Quas, dolor minus.
        Itaque, labore rerum. Quae ducimus sint itaque facilis molestias. Est maiores deserunt ipsum totam, labore sunt corrupti repellat, et quia adipisci facere ipsam quos illo at enim impedit, itaque consequatur.
        Saepe fuga tempore quos alias dignissimos impedit beatae quam, vero quia atque maiores doloribus expedita quas sapiente, qui laborum! Dicta nesciunt rem neque optio vero necessitatibus cumque nam repellat iure. Odit officiis necessitatibus repudiandae voluptatum sapiente, commodi, facilis itaque hic ratione assumenda, porro numquam doloribus aliquid dicta aspernatur laudantium reiciendis consequatur ipsa!0</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit officiis necessitatibus repudiandae voluptatum sapiente, commodi, facilis itaque hic ratione assumenda, porro numquam doloribus aliquid dicta aspernatur laudantium reiciendis consequatur ipsa!0</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit officiis necessitatibus repudiandae voluptatum sapiente, commodi, facilis itaque hic ratione assumenda, porro numquam doloribus aliquid dicta aspernatur laudantium reiciendis consequatur ipsa!0</p>
        <p>Lorem ipsum, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, alias. Eos nam suscipit, vel sequi error quos non nemo natus. Eius molestias quidem amet aspernatur est perspiciatis, tenetur assumenda necessitatibus!
        Vel culpa ad aliquid! Optio alias doloremque quo, officia dolore accusantium repudiandae aspernatur? Incidunt nemo, id iure harum voluptate deserunt, temporibus consectetur eius consequatur maiores sit illum laborum, perspiciatis officiis?
        Saepe illum necessitatibus cum veritatis nostrum non corporis soluta iusto fugiat ullam, quasi quibusdam at. Eaque, sint id, perferendis, tempore incidunt molestias saepe unde architecto quisquam exercitationem ab quia culpa!
        Ipsa nihil a beatae itaque mollitia vero repellat reprehenderit impedit dignissimos dolore ipsum minus tenetur cum deserunt, similique vel ad sint modi architecto voluptates sunt quod est assumenda possimus. Incidunt.
        Impedit cum saepe assumenda quod. Ad ducimus a laudantium ipsum laborum molestiae dolorum quod consequuntur nobis, consequatur neque, voluptatem consectetur fuga, deserunt enim voluptas maiores animi voluptates dolores? Optio, temporibus?
        Vero itaque blanditiis doloribus quos aspernatur doloremque voluptate vel earum velit, ipsum dolorem ullam, commodi facere. Maiores incidunt nihil, nulla vel at sed beatae unde magnam consequuntur cupiditate. Natus, eos! dolor sit amet consectetur adipisicing elit. Odit officiis necessitatibus repudiandae voluptatum sapiente, commodi, facilis itaque hic ratione assumenda, porro numquam doloribus aliquid dicta aspernatur laudantium reiciendis consequatur ipsa!0</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit officiis necessitatibus repudiandae voluptatum sapiente, commodi, facilis itaque hic ratione assumenda, porro numquam doloribus aliquid dicta aspernatur laudantium reiciendis consequatur ipsa!0</p>
        </div>
        

    </div>
  )
}

export default ScrollAnimations