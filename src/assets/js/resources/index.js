import Status from "./statusResource";
export default {
  // Điều hướng
  routes: {
    login: "login",
  },
  // Liên quan sản phẩm
  app: {
    logo: "DEV community",
    file_name: "Danh sách tài sản cố định",
    login_with: "Đăng nhập để tương tác với ",
    copyright: "Copyright © 2023 TH Group",
  },
  // Tên popup qua từng chế độ chọn
  popup: {
    title: {
      create: "Tạo bài đăng",
    },
  },
  // Tooltip
  Title: {
    home: "Trang chủ",
    extension: "Mở rộng sidebar",
    collapse: "Thu gọn sidebar",
    more: "Xem thêm",
    year: "Năm",
    increase: "Tăng",
    decrease: "Giảm",
    "financial-department": "Sở tài chính",
    "search-input": "Tìm kiếm theo tên, mã tài sản",
    fixed_asset_category_filter: "Lọc theo loại tài sản",
    department_filter: "lọc theo bộ phận sử dụng",
    add: "Thêm mới tài sản",
    export: "Xuất dữ liệu",
    edit: "Sửa tài sản",
    duplicate: "Nhân bản",
    limit: "Số lượng bản ghi hiển thị",
    close: "Đóng",
    save: "Lưu thông tin",
    update: "Cập nhật thông tin",
    noSave: "Không lưu thông tin thay đổi",
    cancel: "Hủy bỏ",
    delete: "Xóa tài sản",
    add_voucher: "Thêm mới chứng từ",
  },
  // Tiêu đề trang
  PageTitle: {
    assetList: "Danh sách tài sản",
  },
  // Tiêu đề header của trang
  HeaderTitle: {
    account: "Tài khoản",
    help: "Hỗ trợ",
    menu: "Danh mục",
    notification: "Thông báo",
  },
  // placeholder các input
  Placeholder: {
    fixed_asset_code: "Nhập mã tài sản",
    search_asset_code_name: "Tìm kiếm theo mã, tên tài sản",
    search_asset: "Tìm kiếm tài sản",
    search_voucher: "Tìm kiếm theo số chứng từ, nội dung",
    category: "Loại tài sản",
    department: "Bộ phận sử dụng",
    fixed_asset_name: "Nhập tên tài sản",
    department_code: "Chọn mã bộ phận sử dụng",
    asset_category_code: "Chọn mã loại tài sản",
    login_account: "Username, email hoặc số điện thoại",
    password: "Mật khẩu",
  },
  // Tên button
  ButtonName: {
    "asset-add": "Thêm tài sản",
    login: "Đăng nhập",
  },
  // Từ viết tắt
  Abbreviations: {
    path: "Tài sản Hệ thống - Đường bộ",
    depreciation: "Hao mòn/Khấu hao lũy kế",
    STT: "Số thứ tự",
  },
  // Tiêu đề các cột trong bảng
  Columns: {
    stt: "STT",
    "asset-code": "Mã tài sản",
    "asset-name": "Tên tài sản",
    "asset-category": "Loại tài sản",
    department: "Bộ phận sử dụng",
    quantity: "Số lượng",
    cost: "Nguyên giá",
    depreciation: "HM/KH lũy kế",
    residual_value: "Giá trị còn lại",
    feature: "Tính năng",
  },

  // Nhãn các ô input trong popup
  PopupLabel: {
    fixed_asset_code: "Mã tài sản",
    fixed_asset_name: "Tên tài sản",
    department_code: "Mã bộ phận sử dụng",
    department_name: "Tên bộ phận sử dụng",
    fixed_asset_category_code: "Mã loại tài sản",
    fixed_asset_category_name: "Tên loại tài sản",
    quantity: "Số lượng",
    cost: "Nguyên giá",
    life_time: "Số năm sử dụng",
    depreciation_rate: "Tỉ lệ hao mòn (%)",
    depreciation_value: "Giá trị hao mòn năm",
    tracked_year: "Năm theo dõi",
    purchase_date: "Ngày mua",
    production_date: "Ngày bắt đầu sử dụng",
  },
  // Độ dài ký tự có thể nhập trong ô input
  InputLength: {
    fixed_asset_code: 50,
    fixed_asset_name: 255,
    department: 255,
    fixed_asset_category: 255,
    depreciation_rate: 5,
  },
  // Nội dung dòng đầu tiên trong combobox detail
  ComboboxInfo: {
    firstCol: "Mã",
  },
  // Mô tả chức năng button
  ButtonContent: {
    save: "Lưu",
    cancel: "Hủy",
    remove: "Hủy bỏ",
    delete: "Xóa",
    no: "Không",
    noSave: "Không lưu",
    close: "Đóng",
    select_asset: "Chọn tài sản",
  },
  // ...
  Name: {
    export: "export",
    delete: "delete",
  },
  // Tên lỗi
  ErrorMessage: {
    blank: "là thông tin bắt buộc",
  },
  // Tin nhắn cảnh báo
  WarningMessage: {
    info: "Cần phải nhập thông tin",
    depreciation: "Tỉ lệ hao mòn phải bằng 1/Số năm sử dụng",
    costAndDepreciationValue: "Hao mòn năm phải nhỏ hơn hoặc bằng nguyên giá",
  },
  // Các trường dữ liệu yêu cầu trong popup
  RequiredData: {
    fixed_asset_id: false,
    fixed_asset_code: true,
    fixed_asset_name: true,
    department_id: false,
    department_code: true,
    department_name: false,
    fixed_asset_category_id: false,
    fixed_asset_category_code: true,
    fixed_asset_category_name: false,
    quantity: false,
    cost: true,
    life_time: true,
    depreciation_rate: true,
    depreciation_value: true,
    tracked_year: false,
    purchase_date: false,
    production_date: false,
  },
  // Các trường dữ liệu cần lưu trữ trong popup
  PopupField: {
    fixed_asset_id: "fixed_asset_id",
    fixed_asset_code: "fixed_asset_code",
    fixed_asset_name: "fixed_asset_name",
    department_id: "department_id",
    department_code: "department_code",
    department_name: "department_name",
    fixed_asset_category_id: "fixed_asset_category_id",
    fixed_asset_category_code: "fixed_asset_category_code",
    fixed_asset_category_name: "fixed_asset_category_name",
    quantity: "quantity",
    cost: "cost",
    life_time: "life_time",
    depreciation_rate: "depreciation_rate",
    depreciation_value: "depreciation_value",
    tracked_year: "tracked_year",
    purchase_date: "purchase_date",
    production_date: "production_date",
  },
  // Nội dung hiển thị thông báo
  ToastContent: {
    Add: {
      Success: Status.action.add + " " + Status.status.success,
      Fail: Status.action.add + " " + Status.status.fail,
    },
    Update: {
      Success: Status.action.update + " " + Status.status.success,
      Fail: Status.action.update + " " + Status.status.fail,
    },
    Delete: {
      Success: Status.action.delete + " " + Status.status.success,
      Fail: Status.action.delete + " " + Status.status.fail,
    },
    Duplicate: {
      Success: Status.action.duplicate + " " + Status.status.success,
      Fail: Status.action.duplicate + " " + Status.status.fail,
    },
    DeleteMulti: { Fail: Status.action.deleteMulti + " " + Status.status.fail },
    DeleteMultiSuccess: " bản ghi đã được xóa thành công", // 02 bản ghi đã được xóa thành công
    Error: "Có lỗi xảy ra!",
    Login: "Tài khoản hoặc mật khẩu không chính xác",
  },
  // Các trường áp dụng vào tìm kiếm, lọc và phân trang dữ liệu
  Filter: {
    keyword: "keyword",
    department_id: "department_id",
    fixed_asset_category_id: "fixed_asset_category_id",
    limit: "limit",
    offset: "offset",
  },
  // Các kiểu trang ở table footer
  PageNumber: {
    prePage: "Trang trước",
    currentPage: "Trang hiện tại",
    nextPage: "Trang sau",
  },
  // Nhãn các inputs
  InputLabel: {
    voucher_code: "Mã chứng từ",
    voucher_date: "Ngày chứng từ",
    increment_date: "Ngày ghi tăng",
    description: "Ghi chú",
    department: "Bộ phận sử dụng",
  },
};
