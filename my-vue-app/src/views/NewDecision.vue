<script  setup>

let userData = {
          title: '',
          url: '',
          description: '',
        }

</script>

<template>
  <div class="form-area card border p-2">
    <div class="mb-3">
      <label for="title" class="form-label">Başlık</label>
      <input type="text" class="form-control" id="title" placeholder="kablosuzkedi..." />
    </div>
    <div class="mb-3">
      <label for="url" class="form-label">URL</label>
      <input type="text" class="form-control" id="url" placeholder="https://..." />
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Açıklama</label>
      <textarea class="form-control" placeholder="Bu var ya...." id="description" rows="3"></textarea>
    </div>

    <div class="d-flex justify-content-end align-items-center">
      <button class="btn btn-sm btn-secondary me-1" @click="$router.push({ name: 'HomePage' })">İptal</button>
      <button class="btn btn-sm btn-primary" @click="onSave">Kaydet</button>
    </div>
  </div>
</template>