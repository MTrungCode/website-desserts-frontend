<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:dessert"],
    props: {
        dessert: { type: Object, required: true },
    },
    data() {
        const dessertFormSchema = yup.object().shape({
            email: yup
                .string()
                .required("Email không được bỏ trống.")
                .email("Email không đúng.")
                .max(50, "Email tối đa 50 ký tự"),
            password: yup
                .string()
                .required("Mật khẩu không được bỏ trống.")
                .min(8, "Tên phải ít nhất 8 ký tự")
                .max(20, "Tên có nhiều nhất 20 ký tự"),
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
    }
};
</script>

<template>
    <Form @submit="submitDessert" :validation-schema="dessertFormSchema">        
        <div class="form-group">
            <label for="email">Email</label>
            <Field name="email" type="email" class="form-control" v-model="dessertLocal.email" />
            <ErrorMessage name="email" class="error-feedback" />
        </div>        
        <div class="form-group">
            <label for="password">Mật khẩu</label>
            <Field name="password" type="password" class="form-control" v-model="dessertLocal.password" />
            <ErrorMessage name="password" class="error-feedback" />
        </div>
        <div class="form-group">
            <button class="btn btn-primary">Đăng nhập</button>
        </div>
    </Form>
</template>

<style scoped>
@import "@/assets/form.css";
</style>