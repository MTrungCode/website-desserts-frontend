<script>
export default {
    props: {
        modelValue: { type: String, default: "" },
    },
    emits: ["submits", "update:modelValue"],
    methods: {
        updateModelValue(e) {
            this.$emit("update:modelValue", e.target.value);
        },
        submit() {
            this.$emit("submit");
        },
    },
};
</script>

<template>
    <div class="input-group">
        <input
            type="text"
            class="form-control"
            placeholder="Nhập tên món tráng miệng ..."
            :value="modelValue"
            @input="updateModelValue"
            @keyup.enter="submit"
        />
        <div class="input-group-append">
            <button
                class="btn btn-outline-secondary"
                type="button"
                @click="submit"
            >
                <i class="fa fa-search" aria-hidden="true"></i> Tìm kiếm
            </button>
        </div>
    </div>
</template>