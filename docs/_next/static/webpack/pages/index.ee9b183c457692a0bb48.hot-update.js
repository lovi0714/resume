webpackHotUpdate_N_E("pages/index",{

/***/ "./payload/project.ts":
/*!****************************!*\
  !*** ./payload/project.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {var project = {
  disable: false,
  list: [{
    title: '업무 보고 자동화 및 도메인 지식 축적 체계 구축',
    startedAt: '2026-03',
    where: '코리아엑스퍼트(주)',
    descriptions: [{
      content: '업무 보고 프로세스 자동화',
      weight: 'MEDIUM',
      descriptions: [{
        content: '기존 PPT 기반 업무 보고 및 수작업 취합 프로세스를 Notion 자동화로 전환 (대상 약 25명)'
      }, {
        content: '팀원 PPT를 개별 열어 복사·정리하던 관리자 취합 작업을 제거하고, Notion 자동 취합 + 코멘트 방식으로 개선'
      }, {
        content: 'Claude API를 활용하여 보고 초안 및 취합 초안 자동 생성 기능 구현'
      }]
    }, {
      content: '도메인 지식 축적 체계 구축',
      weight: 'MEDIUM',
      descriptions: [{
        content: '축적된 업무 데이터를 기반으로 Claude API를 활용한 도메인 지식 초안 자동 생성 체계 구축'
      }]
    }, {
      content: '성과',
      weight: 'BOLD',
      descriptions: [{
        content: '관리자 수작업 취합 업무 제거 — Notion 자동 취합으로 전환'
      }, {
        content: 'Claude API 연동으로 보고·취합·지식 초안 작성 자동화'
      }, {
        content: '현재 1개 팀 대상 시범 운영 중'
      }]
    }]
  }, {
    title: '롯데손해보험 고지정보 자동입력',
    startedAt: '2026-01',
    endedAt: '2026-02',
    where: '롯데손해보험',
    descriptions: [{
      content: '고지정보 자동입력 기능 개발',
      weight: 'MEDIUM',
      descriptions: [{
        content: '사고이력 데이터를 활용한 고지정보 자동입력 기능 개발'
      }, {
        content: '업무 요건에 맞춘 입력값 변환 로직 구현'
      }, {
        content: '현업과 직접 커뮤니케이션하며 요구사항 정리 및 기능 반영'
      }, {
        content: '개발부터 테스트 및 운영 반영까지 단독으로 수행'
      }]
    }, {
      content: '공통 질문 응답에 따른 추가 질문 제어 및 유효성 검증 로직 개발',
      weight: 'MEDIUM',
      descriptions: [{
        content: '공통 질문 응답에 따라 추가 질문을 동적으로 제어'
      }, {
        content: '유효성 검증을 통해 알맞은 답변만 입력되도록 처리'
      }]
    }, {
      content: '성과',
      weight: 'BOLD',
      descriptions: [{
        content: '현업 입력 편의성 향상'
      }, {
        content: '유효성 검증 로직을 통해 알맞은 답변만 입력되도록 제어하여 심사 정확도 향상'
      }]
    }]
  }, {
    title: 'DB생명 질병심사 기능 개선',
    startedAt: '2025-09',
    endedAt: '2025-12',
    where: 'DB생명',
    descriptions: [{
      content: '질병심사 기능 대응 개발',
      weight: 'MEDIUM',
      descriptions: [{
        content: '추가 상품 출시에 따른 질병심사 기능 대응 개발'
      }, {
        content: '데이터 증가로 비대해진 특정 테이블 분리 처리'
      }, {
        content: '상품 코드를 활용한 LIST 파티션 테이블 설계 및 적용'
      }, {
        content: '기존 소스 및 쿼리 수정 최소화'
      }, {
        content: '대용량 데이터 적재 및 데이터 정합성 검증 수행'
      }]
    }, {
      content: '성과',
      weight: 'BOLD',
      descriptions: [{
        content: '테이블 구조 개선으로 유지보수성 및 조회 성능 향상'
      }, {
        content: '향후 상품 추가 시 확장 가능한 DB 구조 확보'
      }]
    }]
  }, {
    title: 'KB Life 질병심사 기능 개선',
    startedAt: '2025-07',
    endedAt: '2025-08',
    where: 'KB Life',
    descriptions: [{
      content: '질병심사 기능 개발',
      weight: 'MEDIUM',
      descriptions: [{
        content: '건강 상품 출시 대응 질병심사 기능 개발'
      }, {
        content: '5년 / 10년 시나리오 판 분리하여 심사 구조 개선'
      }, {
        content: '개발, 테스트, 운영 반영 전 과정 단독 수행'
      }]
    }, {
      content: '성과',
      weight: 'BOLD',
      descriptions: [{
        content: '실제 개발 기간 1주, 테스트 포함 2주 이내 기능 구현'
      }, {
        content: '최초 계획된 상품 출시 일정에 맞춰 운영 반영 완료'
      }]
    }]
  }, {
    title: '하나생명 제3보험 시스템 구축 (청약심사 자동화)',
    startedAt: '2024-08',
    endedAt: '2025-06',
    where: '하나생명',
    descriptions: [{
      content: '콘텐츠 배포 기능',
      weight: 'MEDIUM',
      descriptions: [{
        content: '개발계 → 테스트계 → 운영계 데이터 배포 기능 개선'
      }, {
        content: '선택적 배포가 가능하도록 배포 프로세스 개선'
      }, {
        content: '배포 파일 다운로드 / 업로드 기능 구현'
      }, {
        content: '간단한 결재 및 예약 배포 기능 개발'
      }, {
        content: '대용량 데이터 처리 성능 개선'
      }, {
        content: '단건 SELECT 방식 → 1,000건 단위 일괄 처리 방식으로 개선'
      }, {
        content: '화면에서 각 배포 대상 컨텐츠를 불러오는 부분을 비동기로 처리하여 초기 로딩 속도 개선'
      }]
    }, {
      content: '게시판 / 통계 화면',
      weight: 'MEDIUM',
      descriptions: [{
        content: '요구사항에 맞춰 기존 게시판 화면 커스터마이징'
      }, {
        content: '심사 결과를 각 특성에 맞게 총 6개 화면으로 구성하여 제공'
      }]
    }, {
      content: '성과',
      weight: 'BOLD',
      descriptions: [{
        content: 'DB 부하 감소'
      }, {
        content: '데이터 조회 및 파일 생성 속도 개선'
      }, {
        content: '운영 환경에서 안정적인 대용량 배포 체계 구축'
      }, {
        content: 'DBA 요청 없이, 운영 중 변경 사항 반영 가능'
      }]
    }]
  }, {
    title: 'The KE 프로파일 및 장비 관리 시스템',
    startedAt: '2024-03',
    endedAt: '2024-07',
    where: '코리아엑스퍼트(주)',
    descriptions: [{
      content: '사내 인력·장비 관리 시스템 구축',
      weight: 'MEDIUM',
      descriptions: [{
        content: '이력서 수정 승인 페이지 개발'
      }, {
        content: '관리자 메뉴 개발 및 사용자 권한 관리'
      }, {
        content: '로그 관리 (AOP, Logback 활용)'
      }, {
        content: '실시간 서버 자원 모니터링'
      }, {
        content: 'Docker Compose 기반 개발/운영 환경 구축'
      }, {
        content: 'Jenkins 자동 빌드·배포 환경 구성'
      }]
    }]
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (project);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGF5bG9hZC9wcm9qZWN0LnRzIl0sIm5hbWVzIjpbInByb2plY3QiLCJkaXNhYmxlIiwibGlzdCIsInRpdGxlIiwic3RhcnRlZEF0Iiwid2hlcmUiLCJkZXNjcmlwdGlvbnMiLCJjb250ZW50Iiwid2VpZ2h0IiwiZW5kZWRBdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBO0FBQUEsa0RBQU1BLE9BQXlCLEdBQUc7QUFDaENDLFNBQU8sRUFBRSxLQUR1QjtBQUVoQ0MsTUFBSSxFQUFFLENBQ0o7QUFDRUMsU0FBSyxFQUFFLDZCQURUO0FBRUVDLGFBQVMsRUFBRSxTQUZiO0FBR0VDLFNBQUssRUFBRSxZQUhUO0FBSUVDLGdCQUFZLEVBQUUsQ0FDWjtBQUNFQyxhQUFPLEVBQUUsZ0JBRFg7QUFFRUMsWUFBTSxFQUFFLFFBRlY7QUFHRUYsa0JBQVksRUFBRSxDQUNaO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BRFksRUFFWjtBQUFFQSxlQUFPLEVBQUU7QUFBWCxPQUZZLEVBR1o7QUFBRUEsZUFBTyxFQUFFO0FBQVgsT0FIWTtBQUhoQixLQURZLEVBVVo7QUFDRUEsYUFBTyxFQUFFLGlCQURYO0FBRUVDLFlBQU0sRUFBRSxRQUZWO0FBR0VGLGtCQUFZLEVBQUUsQ0FDWjtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQURZO0FBSGhCLEtBVlksRUFpQlo7QUFDRUEsYUFBTyxFQUFFLElBRFg7QUFFRUMsWUFBTSxFQUFFLE1BRlY7QUFHRUYsa0JBQVksRUFBRSxDQUNaO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BRFksRUFFWjtBQUFFQSxlQUFPLEVBQUU7QUFBWCxPQUZZLEVBR1o7QUFBRUEsZUFBTyxFQUFFO0FBQVgsT0FIWTtBQUhoQixLQWpCWTtBQUpoQixHQURJLEVBaUNKO0FBQ0VKLFNBQUssRUFBRSxrQkFEVDtBQUVFQyxhQUFTLEVBQUUsU0FGYjtBQUdFSyxXQUFPLEVBQUUsU0FIWDtBQUlFSixTQUFLLEVBQUUsUUFKVDtBQUtF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UFk7QUFIaEIsS0FEWSxFQWNaO0FBQ0VBLGFBQU8sRUFBRSxhQURYO0FBRUVDLFlBQU0sRUFBRSxRQUZWO0FBR0VGLGtCQUFZLEVBQUUsQ0FDWjtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQURZLEVBRVo7QUFBRUEsZUFBTyxFQUFFO0FBQVgsT0FGWTtBQUhoQixLQWRZLEVBc0JaO0FBQ0VBLGFBQU8sRUFBRSxJQURYO0FBRUVDLFlBQU0sRUFBRSxNQUZWO0FBR0VGLGtCQUFZLEVBQUUsQ0FDWjtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQURZLEVBRVo7QUFBRUEsZUFBTyxFQUFFO0FBQVgsT0FGWSxFQUdaO0FBQUVBLGVBQU8sRUFBRTtBQUFYLE9BSFksRUFJWjtBQUFFQSxlQUFPLEVBQUU7QUFBWCxPQUpZO0FBSGhCLEtBdEJZO0FBTGhCLEdBdkhJLEVBOEpKO0FBQ0VKLFNBQUssRUFBRSx5QkFEVDtBQUVFQyxhQUFTLEVBQUUsU0FGYjtBQUdFSyxXQUFPLEVBQUUsU0FIWDtBQUlFSixTQUFLLEVBQUUsWUFKVDtBQUtFQyxnQkFBWSxFQUFFLENBQ1o7QUFDRUMsYUFBTyxFQUFFLG9CQURYO0FBRUVDLFlBQU0sRUFBRSxRQUZWO0FBR0VGLGtCQUFZLEVBQUUsQ0FDWjtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQURZLEVBRVo7QUFBRUEsZUFBTyxFQUFFO0FBQVgsT0FGWSxFQUdaO0FBQUVBLGVBQU8sRUFBRTtBQUFYLE9BSFksRUFJWjtBQUFFQSxlQUFPLEVBQUU7QUFBWCxPQUpZLEVBS1o7QUFBRUEsZUFBTyxFQUFFO0FBQVgsT0FMWSxFQU1aO0FBQUVBLGVBQU8sRUFBRTtBQUFYLE9BTlk7QUFIaEIsS0FEWTtBQUxoQixHQTlKSTtBQUYwQixDQUFsQztBQXVMZVAsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWU5YjE4M2M0NTc2OTJhMGJiNDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElQcm9qZWN0IH0gZnJvbSAnLi4vY29tcG9uZW50L3Byb2plY3QvSVByb2plY3QnO1xyXG5cclxuY29uc3QgcHJvamVjdDogSVByb2plY3QuUGF5bG9hZCA9IHtcclxuICBkaXNhYmxlOiBmYWxzZSxcclxuICBsaXN0OiBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn7JeF66y0IOuztOqzoCDsnpDrj5ntmZQg67CPIOuPhOuplOyduCDsp4Dsi50g7LaV7KCBIOyytOqzhCDqtazstpUnLFxyXG4gICAgICBzdGFydGVkQXQ6ICcyMDI2LTAzJyxcclxuICAgICAgd2hlcmU6ICfsvZTrpqzslYTsl5HsiqTtjbztirgo7KO8KScsXHJcbiAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfsl4XrrLQg67O06rOgIO2UhOuhnOyEuOyKpCDsnpDrj5ntmZQnLFxyXG4gICAgICAgICAgd2VpZ2h0OiAnTUVESVVNJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfquLDsobQgUFBUIOq4sOuwmCDsl4XrrLQg67O06rOgIOuwjyDsiJjsnpHsl4Ug7Leo7ZWpIO2UhOuhnOyEuOyKpOulvCBOb3Rpb24g7J6Q64+Z7ZmU66GcIOyghO2ZmCAo64yA7IOBIOyVvSAyNeuqhSknIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+2MgOybkCBQUFTrpbwg6rCc67OEIOyXtOyWtCDrs7XsgqzCt+ygleumrO2VmOuNmCDqtIDrpqzsnpAg7Leo7ZWpIOyekeyXheydhCDsoJzqsbDtlZjqs6AsIE5vdGlvbiDsnpDrj5kg7Leo7ZWpICsg7L2U66mY7Yq4IOuwqeyLneycvOuhnCDqsJzshKAnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ0NsYXVkZSBBUEnrpbwg7Zmc7Jqp7ZWY7JesIOuztOqzoCDstIjslYgg67CPIOy3qO2VqSDstIjslYgg7J6Q64+ZIOyDneyEsSDquLDriqUg6rWs7ZiEJyB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfrj4TrqZTsnbgg7KeA7IudIOy2leyggSDssrTqs4Qg6rWs7LaVJyxcclxuICAgICAgICAgIHdlaWdodDogJ01FRElVTScsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7LaV7KCB65CcIOyXheustCDrjbDsnbTthLDrpbwg6riw67CY7Jy866GcIENsYXVkZSBBUEnrpbwg7Zmc7Jqp7ZWcIOuPhOuplOyduCDsp4Dsi50g7LSI7JWIIOyekOuPmSDsg53shLEg7LK06rOEIOq1rOy2lScgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn7ISx6rO8JyxcclxuICAgICAgICAgIHdlaWdodDogJ0JPTEQnLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+q0gOumrOyekCDsiJjsnpHsl4Ug7Leo7ZWpIOyXheustCDsoJzqsbAg4oCUIE5vdGlvbiDsnpDrj5kg7Leo7ZWp7Jy866GcIOyghO2ZmCcgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAnQ2xhdWRlIEFQSSDsl7Drj5nsnLzroZwg67O06rOgwrfst6jtlanCt+yngOyLnSDstIjslYgg7J6R7ISxIOyekOuPme2ZlCcgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7ZiE7J6sIDHqsJwg7YyAIOuMgOyDgSDsi5zrspQg7Jq07JiBIOykkScgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn66Gv642w7IaQ7ZW067O07ZeYIOqzoOyngOygleuztCDsnpDrj5nsnoXroKUnLFxyXG4gICAgICBzdGFydGVkQXQ6ICcyMDI2LTAxJyxcclxuICAgICAgZW5kZWRBdDogJzIwMjYtMDInLFxyXG4gICAgICB3aGVyZTogJ+uhr+uNsOyGkO2VtOuztO2XmCcsXHJcbiAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfqs6Dsp4DsoJXrs7Qg7J6Q64+Z7J6F66ClIOq4sOuKpSDqsJzrsJwnLFxyXG4gICAgICAgICAgd2VpZ2h0OiAnTUVESVVNJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfsgqzqs6DsnbTroKUg642w7J207YSw66W8IO2ZnOyaqe2VnCDqs6Dsp4DsoJXrs7Qg7J6Q64+Z7J6F66ClIOq4sOuKpSDqsJzrsJwnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+yXheustCDsmpTqsbTsl5Ag66ee7LaYIOyeheugpeqwkiDrs4DtmZgg66Gc7KeBIOq1rO2YhCcgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7ZiE7JeF6rO8IOyngeygkSDsu6TrrqTri4jsvIDsnbTshZjtlZjrqbAg7JqU6rWs7IKs7ZWtIOygleumrCDrsI8g6riw64qlIOuwmOyYgScgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn6rCc67Cc67aA7YSwIO2FjOyKpO2KuCDrsI8g7Jq07JiBIOuwmOyYgeq5jOyngCDri6jrj4XsnLzroZwg7IiY7ZaJJyB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfqs7XthrUg7KeI66y4IOydkeuLteyXkCDrlLDrpbgg7LaU6rCAIOyniOusuCDsoJzslrQg67CPIOycoO2aqOyEsSDqsoDspp0g66Gc7KeBIOqwnOuwnCcsXHJcbiAgICAgICAgICB3ZWlnaHQ6ICdNRURJVU0nLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+qzte2GtSDsp4jrrLgg7J2R64u17JeQIOuUsOudvCDstpTqsIAg7KeI66y47J2EIOuPmeyggeycvOuhnCDsoJzslrQnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+ycoO2aqOyEsSDqsoDspp3snYQg7Ya17ZW0IOyVjOunnuydgCDri7Xrs4Drp4wg7J6F66Cl65CY64+E66GdIOyymOumrCcgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn7ISx6rO8JyxcclxuICAgICAgICAgIHdlaWdodDogJ0JPTEQnLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+2YhOyXhSDsnoXroKUg7Y647J2Y7ISxIO2WpeyDgScgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7Jyg7Zqo7ISxIOqygOymnSDroZzsp4HsnYQg7Ya17ZW0IOyVjOunnuydgCDri7Xrs4Drp4wg7J6F66Cl65CY64+E66GdIOygnOyWtO2VmOyXrCDsi6zsgqwg7KCV7ZmV64+EIO2WpeyDgScgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnRELsg53rqoUg7KeI67OR7Ius7IKsIOq4sOuKpSDqsJzshKAnLFxyXG4gICAgICBzdGFydGVkQXQ6ICcyMDI1LTA5JyxcclxuICAgICAgZW5kZWRBdDogJzIwMjUtMTInLFxyXG4gICAgICB3aGVyZTogJ0RC7IOd66qFJyxcclxuICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+yniOuzkeyLrOyCrCDquLDriqUg64yA7J2RIOqwnOuwnCcsXHJcbiAgICAgICAgICB3ZWlnaHQ6ICdNRURJVU0nLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+y2lOqwgCDsg4Htkogg7Lac7Iuc7JeQIOuUsOuluCDsp4jrs5Hsi6zsgqwg6riw64qlIOuMgOydkSDqsJzrsJwnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+uNsOydtO2EsCDspp3qsIDroZwg67mE64yA7ZW07KeEIO2KueyglSDthYzsnbTruJQg67aE66asIOyymOumrCcgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7IOB7ZKIIOy9lOuTnOulvCDtmZzsmqntlZwgTElTVCDtjIzti7DshZgg7YWM7J2067iUIOyEpOqzhCDrsI8g7KCB7JqpJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfquLDsobQg7IaM7IqkIOuwjyDsv7zrpqwg7IiY7KCVIOy1nOyGjO2ZlCcgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn64yA7Jqp65+JIOuNsOydtO2EsCDsoIHsnqwg67CPIOuNsOydtO2EsCDsoJXtlanshLEg6rKA7KadIOyImO2WiScgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn7ISx6rO8JyxcclxuICAgICAgICAgIHdlaWdodDogJ0JPTEQnLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+2FjOydtOu4lCDqtazsobAg6rCc7ISg7Jy866GcIOycoOyngOuztOyImOyEsSDrsI8g7KGw7ZqMIOyEseuKpSDtlqXsg4EnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+2Wpe2bhCDsg4Htkogg7LaU6rCAIOyLnCDtmZXsnqUg6rCA64ql7ZWcIERCIOq1rOyhsCDtmZXrs7QnIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ0tCIExpZmUg7KeI67OR7Ius7IKsIOq4sOuKpSDqsJzshKAnLFxyXG4gICAgICBzdGFydGVkQXQ6ICcyMDI1LTA3JyxcclxuICAgICAgZW5kZWRBdDogJzIwMjUtMDgnLFxyXG4gICAgICB3aGVyZTogJ0tCIExpZmUnLFxyXG4gICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn7KeI67OR7Ius7IKsIOq4sOuKpSDqsJzrsJwnLFxyXG4gICAgICAgICAgd2VpZ2h0OiAnTUVESVVNJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfqsbTqsJUg7IOB7ZKIIOy2nOyLnCDrjIDsnZEg7KeI67OR7Ius7IKsIOq4sOuKpSDqsJzrsJwnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJzXrhYQgLyAxMOuFhCDsi5zrgpjrpqzsmKQg7YyQIOu2hOumrO2VmOyXrCDsi6zsgqwg6rWs7KGwIOqwnOyEoCcgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn6rCc67CcLCDthYzsiqTtirgsIOyatOyYgSDrsJjsmIEg7KCEIOqzvOyglSDri6jrj4Ug7IiY7ZaJJyB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfshLHqs7wnLFxyXG4gICAgICAgICAgd2VpZ2h0OiAnQk9MRCcsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7Iuk7KCcIOqwnOuwnCDquLDqsIQgMeyjvCwg7YWM7Iqk7Yq4IO2PrO2VqCAy7KO8IOydtOuCtCDquLDriqUg6rWs7ZiEJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfstZzstIgg6rOE7ZqN65CcIOyDge2SiCDstpzsi5wg7J287KCV7JeQIOunnuy2sCDsmrTsmIEg67CY7JiBIOyZhOujjCcgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn7ZWY64KY7IOd66qFIOygnDPrs7Ttl5gg7Iuc7Iqk7YWcIOq1rOy2lSAo7LKt7JW97Ius7IKsIOyekOuPme2ZlCknLFxyXG4gICAgICBzdGFydGVkQXQ6ICcyMDI0LTA4JyxcclxuICAgICAgZW5kZWRBdDogJzIwMjUtMDYnLFxyXG4gICAgICB3aGVyZTogJ+2VmOuCmOyDneuqhScsXHJcbiAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfsvZjthZDsuKAg67Cw7Y+sIOq4sOuKpScsXHJcbiAgICAgICAgICB3ZWlnaHQ6ICdNRURJVU0nLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25zOiBbXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+qwnOuwnOqzhCDihpIg7YWM7Iqk7Yq46rOEIOKGkiDsmrTsmIHqs4Qg642w7J207YSwIOuwsO2PrCDquLDriqUg6rCc7ISgJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfshKDtg53soIEg67Cw7Y+s6rCAIOqwgOuKpe2VmOuPhOuhnSDrsLDtj6wg7ZSE66Gc7IS47IqkIOqwnOyEoCcgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn67Cw7Y+sIO2MjOydvCDri6TsmrTroZzrk5wgLyDsl4XroZzrk5wg6riw64qlIOq1rO2YhCcgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn6rCE64uo7ZWcIOqysOyerCDrsI8g7JiI7JW9IOuwsO2PrCDquLDriqUg6rCc67CcJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfrjIDsmqnrn4kg642w7J207YSwIOyymOumrCDshLHriqUg6rCc7ISgJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfri6jqsbQgU0VMRUNUIOuwqeyLnSDihpIgMSwwMDDqsbQg64uo7JyEIOydvOq0hCDsspjrpqwg67Cp7Iud7Jy866GcIOqwnOyEoCcgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7ZmU66m07JeQ7IScIOqwgSDrsLDtj6wg64yA7IOBIOy7qO2FkOy4oOulvCDrtojrn6zsmKTripQg67aA67aE7J2EIOu5hOuPmeq4sOuhnCDsspjrpqztlZjsl6wg7LSI6riwIOuhnOuUqSDsho3rj4Qg6rCc7ISgJyB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICfqsozsi5ztjJAgLyDthrXqs4Qg7ZmU66m0JyxcclxuICAgICAgICAgIHdlaWdodDogJ01FRElVTScsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7JqU6rWs7IKs7ZWt7JeQIOunnuy2sCDquLDsobQg6rKM7Iuc7YyQIO2ZlOuptCDsu6TsiqTthLDrp4jsnbTsp5UnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+yLrOyCrCDqsrDqs7zrpbwg6rCBIO2KueyEseyXkCDrp57qsowg7LSdIDbqsJwg7ZmU66m07Jy866GcIOq1rOyEse2VmOyXrCDsoJzqs7UnIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29udGVudDogJ+yEseqzvCcsXHJcbiAgICAgICAgICB3ZWlnaHQ6ICdCT0xEJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uczogW1xyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICdEQiDrtoDtlZgg6rCQ7IaMJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfrjbDsnbTthLAg7KGw7ZqMIOuwjyDtjIzsnbwg7IOd7ISxIOyGjeuPhCDqsJzshKAnIH0sXHJcbiAgICAgICAgICAgIHsgY29udGVudDogJ+yatOyYgSDtmZjqsr3sl5DshJwg7JWI7KCV7KCB7J24IOuMgOyaqeufiSDrsLDtj6wg7LK06rOEIOq1rOy2lScgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAnREJBIOyalOyyrSDsl4bsnbQsIOyatOyYgSDspJEg67OA6rK9IOyCrO2VrSDrsJjsmIEg6rCA64qlJyB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdUaGUgS0Ug7ZSE66Gc7YyM7J28IOuwjyDsnqXruYQg6rSA66asIOyLnOyKpO2FnCcsXHJcbiAgICAgIHN0YXJ0ZWRBdDogJzIwMjQtMDMnLFxyXG4gICAgICBlbmRlZEF0OiAnMjAyNC0wNycsXHJcbiAgICAgIHdoZXJlOiAn7L2U66as7JWE7JeR7Iqk7Y287Yq4KOyjvCknLFxyXG4gICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb250ZW50OiAn7IKs64K0IOyduOugpcK37J6l67mEIOq0gOumrCDsi5zsiqTthZwg6rWs7LaVJyxcclxuICAgICAgICAgIHdlaWdodDogJ01FRElVTScsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbnM6IFtcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7J2066Cl7IScIOyImOyglSDsirnsnbgg7Y6Y7J207KeAIOqwnOuwnCcgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn6rSA66as7J6QIOuplOuJtCDqsJzrsJwg67CPIOyCrOyaqeyekCDqtoztlZwg6rSA66asJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICfroZzqt7gg6rSA66asIChBT1AsIExvZ2JhY2sg7Zmc7JqpKScgfSxcclxuICAgICAgICAgICAgeyBjb250ZW50OiAn7Iuk7Iuc6rCEIOyEnOuyhCDsnpDsm5Ag66qo64uI7YSw66eBJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICdEb2NrZXIgQ29tcG9zZSDquLDrsJgg6rCc67CcL+yatOyYgSDtmZjqsr0g6rWs7LaVJyB9LFxyXG4gICAgICAgICAgICB7IGNvbnRlbnQ6ICdKZW5raW5zIOyekOuPmSDruYzrk5zCt+uwsO2PrCDtmZjqsr0g6rWs7ISxJyB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==