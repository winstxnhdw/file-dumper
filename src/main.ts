function readFileAsync(file: File | Blob): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
    reader.readAsText(file);
  });
}

async function dumpFile() {
  const fileInput = document.getElementById('file-input') as HTMLInputElement;
  const fileLinkContainer = document.getElementById('file-link-container') as HTMLSpanElement;
  const file = fileInput.files?.[0];

  if (!file) {
    alert('You must pass a single file!');
    return;
  }

  const fileContent = await readFileAsync(file);
  const newFileBlob = new Blob([fileContent], { type: 'text/plain' });

  const fileLink = document.createElement('a');
  fileLink.href = URL.createObjectURL(newFileBlob);
  fileLink.target = file.name;
  fileLink.textContent = 'Click here if you have not been redirected';
  fileLinkContainer.replaceChildren(fileLink);
  fileLinkContainer.hidden = false;
  fileLink.click();
}

window.dumpFile = dumpFile;
