<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:dessert", "delete:dessert"],
    props: {
        dessert: { type: Object, required: true },
    },
    data() {
        const dessertFormSchema = yup.object().shape({
            name: yup
                .string()
                .required("Tên không được bỏ trống."),
            description: yup
                .string(),
            ingredients: yup
                .string(),
            methods: yup
                .string()
                .required("Cách làm không được bỏ trống."),
            thumbar: yup
                .string()
                .required("Link hình ảnh không được bỏ trống."),
        });
        return {
            dessertLocal: this.dessert,
            dessertFormSchema,
        };
    },
    methods: {
        submitDessert() {
            this.$emit("submit:dessert", this.dessertLocal);
        },
        deleteDessert() {
            this.$emit("delete:dessert", this.dessertLocal.id);
        }
    }
};
</script>

<template>
    <Form :validation-schema="dessertFormSchema">
        <div class="form-group">
            <label for="name">Tên món tráng miệng</label>
            <Field name="name" type="text" class="form-control" v-model="dessertLocal.name" />
            <ErrorMessage name="name" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="description">Mô tả</label>
            <Field name="description" type="text" class="form-control" v-model="dessertLocal.description" />
            <ErrorMessage name="description" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="ingredients">Thành phần</label>
            <Field name="ingredients" type="text" class="form-control" v-model="dessertLocal.ingredients" />        
            <!-- <textarea name="ingredients" rows="3" class="form-control" v-model="dessertLocal.ingredients"></textarea> -->
            <ErrorMessage name="ingredients" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="method">Cách làm</label>
            <Field name="method" type="text" class="form-control" v-model="dessertLocal.method" />
            <!-- <textarea name="method" rows="8" class="form-control" v-model="dessertLocal.method"></textarea> -->
            <ErrorMessage name="method" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="thumbar">Link hình ảnh</label>
            <Field name="thumbar" type="text" class="form-control" v-model="dessertLocal.thumbar" />
            <ErrorMessage name="thumbar" class="error-feedback" />
        </div>
        <div class="form-group form-check">
            <input name="favorite" type="checkbox" class="form-check-input" v-model="dessertLocal.favorite" />
            <label for="favorite" class="form-check-label">
                <strong>Yêu thích</strong>
            </label>
        </div>
        <div class="form-group">
            <button class="btn btn-primary" @click="submitDessert">Lưu</button>
            <button v-if="dessertLocal._id" class="ml-2 btn btn-danger" @click="deleteDessert">
                Xóa
            </button>
        </div>
    </Form>
</template>
<style scoped>
@import "@/assets/form.css";
</style>