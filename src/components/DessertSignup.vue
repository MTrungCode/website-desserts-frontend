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
            name: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(2, "Tên phải ít nhất 2 ký tự")
                .max(50, "Tên có nhiều nhất 50 ký tự"),
            email: yup
                .string()
                .required("Email không được bỏ trống.")
                .email("Email không đúng.")
                .max(50, "Email tối đa 50 ký tự"),
            address: yup.string().max(100, "Địa chỉ tối đa 50 ký tự"),
            phone: yup
                .string()
                .matches(
                    /((09|03|07|08|05)+([0-9]{8})\b)/g,
                    "Số điện thoại không hợp lệ."
                ),
            password: yup
                .string()
                .required("Mật khẩu không được bỏ trống.")
                .min(8, "Tên phải ít nhất 8 ký tự")
                .max(20, "Tên có nhiều nhất 20 ký tự"),
            confirmPassword: yup
                .string()
                .required("Mật khẩu xác nhận không được bỏ trống.")
                .oneOf([yup.ref('password'), null], 'Mật khẩu phải giống nhau'),
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
    <Form @submit="submitDessert" :validation-schema="dessertFormSchema" method="post">
        <div class="form-group">
            <label for="name">Tên</label>
            <Field name="name" type="text" class="form-control" v-model="dessertLocal.name" />
            <ErrorMessage name="name" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <Field name="email" type="email" class="form-control" v-model="dessertLocal.email" />
            <ErrorMessage name="email" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="address">Địa chỉ</label>
            <Field name="address" type="text" class="form-control" v-model="dessertLocal.address" />
            <ErrorMessage name="address" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="phone">Điện thoại</label>
            <Field name="phone" type="tel" class="form-control" v-model="dessertLocal.phone" />
            <ErrorMessage name="phone" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="password">Mật khẩu</label>
            <Field name="password" type="password" class="form-control" v-model="dessertLocal.password" />
            <ErrorMessage name="password" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="confirmPassword">Mật khẩu xác nhận</label>
            <Field name="confirmPassword" type="password" class="form-control" v-model="dessertLocal.confirmPassword" />
            <ErrorMessage name="confirmPassword" class="error-feedback" />
        </div>
        <div class="form-group">
            <button class="btn btn-primary">Đăng ký</button>
        </div>
    </Form>
</template>

<style scoped>
@import "@/assets/form.css";
</style>