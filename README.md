# JSON to TypeScript Converter

将 JSON 对象快速转换为 TypeScript 接口定义的 VS Code 扩展。

## 功能

- 将 JSON 对象转换为 TypeScript 接口定义
- 支持嵌套对象和数组类型推断
- 自动生成接口名称
- 在新编辑器窗口中显示转换结果

## 使用方法

1. 在 VS Code 中打开命令面板（`Ctrl+Shift+P` 或 `Cmd+Shift+P`）
2. 输入 "Convert JSON to TS" 并选择该命令
3. 在弹出的输入框中粘贴或输入您的 JSON 对象
4. 生成的 TypeScript 接口将在新编辑器窗口中显示

## 示例

输入 JSON:

```json
{
  "name": "John",
  "age": 30,
  "address": {
    "street": "123 Main St",
    "city": "New York"
  },
  "hobbies": ["reading", "swimming"]
}
```

输出 TypeScript 接口:

```typescript
interface RootObject {
  name: string;
  age: number;
  address: Address;
  hobbies: string[];
}

interface Address {
  street: string;
  city: string;
}
```

## 要求

- VS Code 版本 1.103.0 或更高

## 已知问题

目前没有已知问题。如果您发现问题，请在 GitHub 上提交 issue。

## 发布说明

### 0.0.1

初始版本发布

---

## 更多信息

- [VS Code Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)
