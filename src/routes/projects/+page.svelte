<script>
  import { collection, onSnapshot } from 'firebase/firestore';
  import { getFirestore } from 'firebase/firestore';

  let projects = [];
  const db = getFirestore();
  const query = collection(db, 'projects');

  onSnapshot(query, (snapshot) => {
    projects = snapshot.docs.map(doc => doc.data());
  });
</script>

<div>
  {#each projects as project (project.id)}
    <div class="card">
      <a href="{project.link}" class="card__cover">
        <img src="{project.image}" alt="">
        <span class="card__rate">
          <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'>
            <path d='M394,480a16,16,0,0,1-9.39-3L256,383.76,127.39,477a16,16,0,0,1-24.55-18.08L153,310.35,23,221.2A16,16,0,0,1,32,192H192.38l48.4-148.95a16,16,0,0,1,30.44,0l48.4,149H480a16,16,0,0,1,9.05,29.2L359,310.35l50.13,148.53A16,16,0,0,1,394,480Z'/>
          </svg>
          {project.star}
        </span>
      </a>

      <div class="card__title">
        <h3><a href="{project.link}">{project.title}</a></h3>
        <span>$ {project.taka} <s>$ {project.rtaka}</s></span>
      </div>

      <div class="card__actions">
        <button class="card__buy" type="button">Buy</button>
        <button class="card__favorite" type="button">
          <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'>
            <path d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z' style='fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px'/>
          </svg>
        </button>
      </div>
    </div>
  {/each}
</div>
