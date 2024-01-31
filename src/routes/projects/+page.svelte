<script>
  import { collection, onSnapshot } from 'firebase/firestore';
  import { getFirestore } from 'firebase/firestore';

  let projects = [];
  const db = getFirestore();
  const query = collection(db, 'projects');

  onSnapshot(query, (snapshot) => {
    projects = snapshot.docs.map((doc) => doc.data());
  });
</script>

<section class="section">
    <div class="row">
        <div class="col-12 col-lg-6 col-xl-4">
            <div class="row">
                <div class="col-12">
                    <!-- Cards -->
                    <div class="section__title-wrap">
                        <h2 class="section__title section__title--small">Pictures</h2>
                        <div class="section__nav-wrap">
                            <a href="/" class="section__view">View All</a>
                        </div>
                    </div>

                    <ul class="list list--mb">
                        {#each projects as project (project.id)}
                        <li class="list__item">
                            <a href="{project.link}" class="list__cover">
                                <img src="{project.image}" alt="{project.title}">
                            </a>

                            <div class="list__wrap">
                                <h3 class="list__title">
                                    <a href="{project.link}">{project.title}</a>
                                </h3>

                                <div class="list__price">
                                    <span>{project.taka}</span>
                                    <s>{project.rtaka}</s>
                                    <b>{project.off}% OFF</b>
                                </div>

                                <button class="list__buy" type="button">
                                    <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><line x1='256' y1='112' x2='256' y2='400' style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/><line x1='400' y1='256' x2='112' y2='256' style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/></svg>
                                </button>
                            </div>
                        </li>
                        {/each}
                    </ul>
                    <!-- End Cards -->
                </div>
            </div>
        </div>
    </div>
</section>
