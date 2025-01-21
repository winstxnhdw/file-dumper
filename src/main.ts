function readFileAsync(file: File | Blob): Promise<string> {
	return new Promise<string>((resolve, reject) => {
		const reader = new FileReader();

		reader.onload = () => resolve(reader.result as string);
		reader.onerror = () => reject(reader.error);
		reader.readAsText(file);
	});
}

async function dumpFile() {
	const fileInput = document.getElementById("file-input") as HTMLInputElement;
	const file = fileInput.files?.[0];

	if (!file) {
		alert("You must pass a single file!");
		return;
	}

	const fileContent = await readFileAsync(file);
	const newFileBlob = new Blob([fileContent], { type: "text/plain" });
	open(URL.createObjectURL(newFileBlob), file.name);
}

window.dumpFile = dumpFile;
