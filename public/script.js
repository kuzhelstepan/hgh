const input = document.getElementById('choose-files');
const fileList = document.getElementById('file-list');

input.addEventListener('change', () => {
  fileList.innerHTML = ''; // Clear old list
  const files = input.files;

  if (files.length === 0) {
    const li = document.createElement('li');
    li.textContent = 'No files selected.';
    fileList.appendChild(li);
    return;
  }

  for (const file of files) {
    const li = document.createElement('li');
    li.textContent = `${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
    fileList.appendChild(li);
  }
});