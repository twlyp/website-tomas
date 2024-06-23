<script lang="ts">
    export let title: string;
    export let imageSrc: string;
</script>

<div class="flex flex-col items-center mb-10">
    <h1 class="text-2xl">{title}</h1>
    <img class="p-3" src={imageSrc} alt={title} />
</div>