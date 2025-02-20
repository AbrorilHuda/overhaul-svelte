<script lang="ts">
	 import { t, locale, locales } from "$lib";

	type angkatype = number;

	type dataResponse = {
		name: string;
		alamat: string;
		umur: number;
	};

	let user = $state<dataResponse[]>([
		{
			name: 'abrordc',
			alamat: 'jln jalan',
			umur: 20
		}
	]);

	user.push({
		name: 'test',
		alamat: 'test',
		umur: 1
	});

	let angka: angkatype = $state(0);
	let large = $derived(angka > 10);

	function handleSubmit(e: SubmitEvent) {
		const form = e.target as HTMLFormElement
		const formData = new FormData(form)

		const nama = formData.get("nama") as string
		const alamat = formData.get("alamat") as string
		const umur = Number(formData.get("umur"))

		if(nama.trim() == "" && alamat.trim() == "" && umur == 0){
			alert("no data wrong...")
		}else{
		user.push({
			name: nama,
			alamat,
			umur
		});
		}

		
	}

</script>
<p>
    <select bind:value={$locale}>
      {#each locales as l}
        <option value={l}>{l}</option>
      {/each}
    </select>
  </p>

<h1>{$t("home.title")}</h1>

<button onclick={() => angka++}>
	click {angka}
</button>

<p>
	{$t("home.description")} <span
		style="background-color: blue; color: #fff">{large}</span
	>
</p>

<form onsubmit={handleSubmit}>
	<input type="text" name="nama" placeholder="isi nama" />
	<input type="text" name="alamat" placeholder="isi alamat" />
	<input type="number" name="umur" placeholder="isi umur" />
	<button>submit</button>
</form>

<ul>
	{#each user as us}
		<li>{us.name}</li>
		<li>{us.alamat}</li>
		<li>{us.umur}</li>
	{/each}
</ul>
